// This file is part of MinIO Console Server
// Copyright (c) 2021 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Theme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import withStyles from "@mui/styles/withStyles";
import { LinearProgress } from "@mui/material";
import { red } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Button from "@mui/material/Button";
import {
  NotificationEndpointItem,
  NotificationEndpointsList,
  TransformedEndpointItem,
} from "./types";
import { notificationTransform } from "./utils";
import { AddIcon, LambdaIcon } from "../../../icons";
import TableWrapper from "../Common/TableWrapper/TableWrapper";
import { setErrorSnackMessage } from "../../../actions";
import {
  actionsTray,
  containerForHeader,
  searchField,
  settingsCommon,
  tableStyles,
} from "../Common/FormComponents/common/styleLibrary";
import { ErrorResponseHandler } from "../../../common/types";
import api from "../../../common/api";
import RefreshIcon from "../../../icons/RefreshIcon";
import history from "../../../history";
import HelpBox from "../../../common/HelpBox";
import BoxIconButton from "../Common/BoxIconButton/BoxIconButton";
import AButton from "../Common/AButton/AButton";
import PageLayout from "../Common/Layout/PageLayout";
import SearchBox from "../Common/SearchBox";

interface IListNotificationEndpoints {
  classes: any;
  setErrorSnackMessage: typeof setErrorSnackMessage;
}

const styles = (theme: Theme) =>
  createStyles({
    ...actionsTray,
    ...settingsCommon,
    ...containerForHeader(theme.spacing(4)),
    twHeight: {
      minHeight: 400,
    },
    tableBlock: {
      ...tableStyles.tableBlock,
    },
    rightActionItems: {
      display: "flex",
      "& button": {
        whiteSpace: "nowrap",
      },
    },
    searchField: {
      ...searchField.searchField,
      maxWidth: 380,
    },
  });

const ListNotificationEndpoints = ({
  classes,
  setErrorSnackMessage,
}: IListNotificationEndpoints) => {
  //Local States
  const [records, setRecords] = useState<TransformedEndpointItem[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //Effects
  // load records on mount
  useEffect(() => {
    if (isLoading) {
      const fetchRecords = () => {
        api
          .invoke("GET", `/api/v1/admin/notification_endpoints`)
          .then((res: NotificationEndpointsList) => {
            let resNotEndList: NotificationEndpointItem[] = [];
            if (res.notification_endpoints !== null) {
              resNotEndList = res.notification_endpoints;
            }
            setRecords(notificationTransform(resNotEndList));
            setIsLoading(false);
          })
          .catch((err: ErrorResponseHandler) => {
            setErrorSnackMessage(err);
            setIsLoading(false);
          });
      };
      fetchRecords();
    }
  }, [isLoading, setErrorSnackMessage]);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  const filteredRecords = records.filter((b: TransformedEndpointItem) => {
    if (filter === "") {
      return true;
    }
    return b.service_name.indexOf(filter) >= 0;
  });

  const statusDisplay = (status: string) => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <FiberManualRecordIcon
          style={status === "Offline" ? { color: red[500] } : {}}
        />
        {status}
      </div>
    );
  };

  return (
    <Fragment>
      <PageLayout>
        <Grid item xs={12} className={classes.actionsTray}>
          <SearchBox
            placeholder="Search target"
            onChange={setFilter}
            overrideClass={classes.searchField}
          />
          <div className={classes.rightActionItems}>
            <BoxIconButton
              color="primary"
              aria-label="Refresh List"
              onClick={() => {
                setIsLoading(true);
              }}
              size="large"
            >
              <RefreshIcon />
            </BoxIconButton>
            <Button
              variant="contained"
              color="primary"
              endIcon={<AddIcon />}
              onClick={() => {
                history.push("/notification-endpoints/add");
              }}
            >
              Add Notification Target
            </Button>
          </div>
        </Grid>
        {isLoading && <LinearProgress />}
        {!isLoading && (
          <Fragment>
            {records.length > 0 && (
              <Fragment>
                <Grid item xs={12} className={classes.tableBlock}>
                  <TableWrapper
                    itemActions={[]}
                    columns={[
                      {
                        label: "Status",
                        elementKey: "status",
                        renderFunction: statusDisplay,
                        width: 150,
                      },
                      { label: "Service", elementKey: "service_name" },
                    ]}
                    isLoading={isLoading}
                    records={filteredRecords}
                    entityName="Notification Endpoints"
                    idField="service_name"
                    customPaperHeight={classes.twHeight}
                  />
                </Grid>
                <Grid item xs={12}>
                  <HelpBox
                    title={"Notification Endpoints"}
                    iconComponent={<LambdaIcon />}
                    help={
                      <Fragment>
                        MinIO bucket notifications allow administrators to send
                        notifications to supported external services on certain
                        object or bucket events. MinIO supports bucket and
                        object-level S3 events similar to the Amazon S3 Event
                        Notifications.
                        <br />
                        <br />
                        You can learn more at our{" "}
                        <a
                          href="https://docs.min.io/minio/baremetal/monitoring/bucket-notifications/bucket-notifications.html?ref=con"
                          target="_blank"
                          rel="noreferrer"
                        >
                          documentation
                        </a>
                        .
                      </Fragment>
                    }
                  />
                </Grid>
              </Fragment>
            )}
            {records.length === 0 && (
              <Grid
                container
                justifyContent={"center"}
                alignContent={"center"}
                alignItems={"center"}
              >
                <Grid item xs={8}>
                  <HelpBox
                    title={"Notification Targets"}
                    iconComponent={<LambdaIcon />}
                    help={
                      <Fragment>
                        MinIO bucket notifications allow administrators to send
                        notifications to supported external services on certain
                        object or bucket events. MinIO supports bucket and
                        object-level S3 events similar to the Amazon S3 Event
                        Notifications.
                        <br />
                        <br />
                        To get started,{" "}
                        <AButton
                          onClick={() => {
                            history.push("/notification-endpoints/add");
                          }}
                        >
                          Add a Notification Target
                        </AButton>
                        .
                      </Fragment>
                    }
                  />
                </Grid>
              </Grid>
            )}
          </Fragment>
        )}
      </PageLayout>
    </Fragment>
  );
};

const mapDispatchToProps = {
  setErrorSnackMessage,
};

const connector = connect(null, mapDispatchToProps);

export default withStyles(styles)(connector(ListNotificationEndpoints));
