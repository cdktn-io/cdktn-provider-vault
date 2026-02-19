/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface VaultProviderConfig {
  /**
  * If true, adds the value of the `address` argument to the Terraform process environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#add_address_to_env VaultProvider#add_address_to_env}
  */
  readonly addAddressToEnv?: string;
  /**
  * URL of the root of the target Vault server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#address VaultProvider#address}
  */
  readonly address?: string;
  /**
  * Path to directory containing CA certificate files to validate the server's certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#ca_cert_dir VaultProvider#ca_cert_dir}
  */
  readonly caCertDir?: string;
  /**
  * Path to a CA certificate file to validate the server's certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#ca_cert_file VaultProvider#ca_cert_file}
  */
  readonly caCertFile?: string;
  /**
  * Maximum TTL for secret leases requested by this provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#max_lease_ttl_seconds VaultProvider#max_lease_ttl_seconds}
  */
  readonly maxLeaseTtlSeconds?: number;
  /**
  * Maximum number of retries when a 5xx error code is encountered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#max_retries VaultProvider#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Maximum number of retries for Client Controlled Consistency related operations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#max_retries_ccc VaultProvider#max_retries_ccc}
  */
  readonly maxRetriesCcc?: number;
  /**
  * The namespace to use. Available only for Vault Enterprise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#namespace VaultProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * In the case where the Vault token is for a specific namespace and the provider namespace is not configured, use the token namespace as the root namespace for all resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#set_namespace_from_token VaultProvider#set_namespace_from_token}
  */
  readonly setNamespaceFromToken?: boolean | cdktn.IResolvable;
  /**
  * Set this to true to prevent the creation of ephemeral child token used by this provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#skip_child_token VaultProvider#skip_child_token}
  */
  readonly skipChildToken?: boolean | cdktn.IResolvable;
  /**
  * Skip the dynamic fetching of the Vault server version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#skip_get_vault_version VaultProvider#skip_get_vault_version}
  */
  readonly skipGetVaultVersion?: boolean | cdktn.IResolvable;
  /**
  * Set this to true only if the target Vault server is an insecure development instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#skip_tls_verify VaultProvider#skip_tls_verify}
  */
  readonly skipTlsVerify?: boolean | cdktn.IResolvable;
  /**
  * Name to use as the SNI host when connecting via TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#tls_server_name VaultProvider#tls_server_name}
  */
  readonly tlsServerName?: string;
  /**
  * Token to use to authenticate to Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#token VaultProvider#token}
  */
  readonly token?: string;
  /**
  * Token name to use for creating the Vault child token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#token_name VaultProvider#token_name}
  */
  readonly tokenName?: string;
  /**
  * Override the Vault server version, which is normally determined dynamically from the target Vault server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#vault_version_override VaultProvider#vault_version_override}
  */
  readonly vaultVersionOverride?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#alias VaultProvider#alias}
  */
  readonly alias?: string;
  /**
  * auth_login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#auth_login VaultProvider#auth_login}
  */
  readonly authLogin?: VaultProviderAuthLogin[] | cdktn.IResolvable;
  /**
  * auth_login_aws block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#auth_login_aws VaultProvider#auth_login_aws}
  */
  readonly authLoginAws?: VaultProviderAuthLoginAws[] | cdktn.IResolvable;
  /**
  * auth_login_azure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#auth_login_azure VaultProvider#auth_login_azure}
  */
  readonly authLoginAzure?: VaultProviderAuthLoginAzure[] | cdktn.IResolvable;
  /**
  * auth_login_cert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#auth_login_cert VaultProvider#auth_login_cert}
  */
  readonly authLoginCert?: VaultProviderAuthLoginCert[] | cdktn.IResolvable;
  /**
  * auth_login_gcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#auth_login_gcp VaultProvider#auth_login_gcp}
  */
  readonly authLoginGcp?: VaultProviderAuthLoginGcp[] | cdktn.IResolvable;
  /**
  * auth_login_jwt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#auth_login_jwt VaultProvider#auth_login_jwt}
  */
  readonly authLoginJwt?: VaultProviderAuthLoginJwt[] | cdktn.IResolvable;
  /**
  * auth_login_kerberos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#auth_login_kerberos VaultProvider#auth_login_kerberos}
  */
  readonly authLoginKerberos?: VaultProviderAuthLoginKerberos[] | cdktn.IResolvable;
  /**
  * auth_login_oci block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#auth_login_oci VaultProvider#auth_login_oci}
  */
  readonly authLoginOci?: VaultProviderAuthLoginOci[] | cdktn.IResolvable;
  /**
  * auth_login_oidc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#auth_login_oidc VaultProvider#auth_login_oidc}
  */
  readonly authLoginOidc?: VaultProviderAuthLoginOidc[] | cdktn.IResolvable;
  /**
  * auth_login_radius block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#auth_login_radius VaultProvider#auth_login_radius}
  */
  readonly authLoginRadius?: VaultProviderAuthLoginRadius[] | cdktn.IResolvable;
  /**
  * auth_login_token_file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#auth_login_token_file VaultProvider#auth_login_token_file}
  */
  readonly authLoginTokenFile?: VaultProviderAuthLoginTokenFile[] | cdktn.IResolvable;
  /**
  * auth_login_userpass block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#auth_login_userpass VaultProvider#auth_login_userpass}
  */
  readonly authLoginUserpass?: VaultProviderAuthLoginUserpass[] | cdktn.IResolvable;
  /**
  * client_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#client_auth VaultProvider#client_auth}
  */
  readonly clientAuth?: VaultProviderClientAuth[] | cdktn.IResolvable;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#headers VaultProvider#headers}
  */
  readonly headers?: VaultProviderHeaders[] | cdktn.IResolvable;
}
export interface VaultProviderAuthLogin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#method VaultProvider#method}
  */
  readonly method?: string;
  /**
  * The authentication engine's namespace. Conflicts with use_root_namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#namespace VaultProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#parameters VaultProvider#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#path VaultProvider#path}
  */
  readonly path: string;
  /**
  * Authenticate to the root Vault namespace. Conflicts with namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#use_root_namespace VaultProvider#use_root_namespace}
  */
  readonly useRootNamespace?: boolean | cdktn.IResolvable;
}

export function vaultProviderAuthLoginToTerraform(struct?: VaultProviderAuthLogin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktn.stringToTerraform(struct!.method),
    namespace: cdktn.stringToTerraform(struct!.namespace),
    parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.parameters),
    path: cdktn.stringToTerraform(struct!.path),
    use_root_namespace: cdktn.booleanToTerraform(struct!.useRootNamespace),
  }
}


export function vaultProviderAuthLoginToHclTerraform(struct?: VaultProviderAuthLogin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: cdktn.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_root_namespace: {
      value: cdktn.booleanToHclTerraform(struct!.useRootNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface VaultProviderAuthLoginAws {
  /**
  * The AWS access key ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#aws_access_key_id VaultProvider#aws_access_key_id}
  */
  readonly awsAccessKeyId?: string;
  /**
  * The IAM endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#aws_iam_endpoint VaultProvider#aws_iam_endpoint}
  */
  readonly awsIamEndpoint?: string;
  /**
  * The name of the AWS profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#aws_profile VaultProvider#aws_profile}
  */
  readonly awsProfile?: string;
  /**
  * The AWS region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#aws_region VaultProvider#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * The ARN of the AWS Role to assume.Used during STS AssumeRole
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#aws_role_arn VaultProvider#aws_role_arn}
  */
  readonly awsRoleArn?: string;
  /**
  * Specifies the name to attach to the AWS role session. Used during STS AssumeRole
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#aws_role_session_name VaultProvider#aws_role_session_name}
  */
  readonly awsRoleSessionName?: string;
  /**
  * The AWS secret access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#aws_secret_access_key VaultProvider#aws_secret_access_key}
  */
  readonly awsSecretAccessKey?: string;
  /**
  * The AWS session token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#aws_session_token VaultProvider#aws_session_token}
  */
  readonly awsSessionToken?: string;
  /**
  * Path to the AWS shared credentials file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#aws_shared_credentials_file VaultProvider#aws_shared_credentials_file}
  */
  readonly awsSharedCredentialsFile?: string;
  /**
  * The STS endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#aws_sts_endpoint VaultProvider#aws_sts_endpoint}
  */
  readonly awsStsEndpoint?: string;
  /**
  * Path to the file containing an OAuth 2.0 access token or OpenID Connect ID token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#aws_web_identity_token_file VaultProvider#aws_web_identity_token_file}
  */
  readonly awsWebIdentityTokenFile?: string;
  /**
  * The Vault header value to include in the STS signing request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#header_value VaultProvider#header_value}
  */
  readonly headerValue?: string;
  /**
  * The path where the authentication engine is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#mount VaultProvider#mount}
  */
  readonly mount?: string;
  /**
  * The authentication engine's namespace. Conflicts with use_root_namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#namespace VaultProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * The Vault role to use when logging into Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#role VaultProvider#role}
  */
  readonly role: string;
  /**
  * Authenticate to the root Vault namespace. Conflicts with namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#use_root_namespace VaultProvider#use_root_namespace}
  */
  readonly useRootNamespace?: boolean | cdktn.IResolvable;
}

export function vaultProviderAuthLoginAwsToTerraform(struct?: VaultProviderAuthLoginAws | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_access_key_id: cdktn.stringToTerraform(struct!.awsAccessKeyId),
    aws_iam_endpoint: cdktn.stringToTerraform(struct!.awsIamEndpoint),
    aws_profile: cdktn.stringToTerraform(struct!.awsProfile),
    aws_region: cdktn.stringToTerraform(struct!.awsRegion),
    aws_role_arn: cdktn.stringToTerraform(struct!.awsRoleArn),
    aws_role_session_name: cdktn.stringToTerraform(struct!.awsRoleSessionName),
    aws_secret_access_key: cdktn.stringToTerraform(struct!.awsSecretAccessKey),
    aws_session_token: cdktn.stringToTerraform(struct!.awsSessionToken),
    aws_shared_credentials_file: cdktn.stringToTerraform(struct!.awsSharedCredentialsFile),
    aws_sts_endpoint: cdktn.stringToTerraform(struct!.awsStsEndpoint),
    aws_web_identity_token_file: cdktn.stringToTerraform(struct!.awsWebIdentityTokenFile),
    header_value: cdktn.stringToTerraform(struct!.headerValue),
    mount: cdktn.stringToTerraform(struct!.mount),
    namespace: cdktn.stringToTerraform(struct!.namespace),
    role: cdktn.stringToTerraform(struct!.role),
    use_root_namespace: cdktn.booleanToTerraform(struct!.useRootNamespace),
  }
}


export function vaultProviderAuthLoginAwsToHclTerraform(struct?: VaultProviderAuthLoginAws | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_access_key_id: {
      value: cdktn.stringToHclTerraform(struct!.awsAccessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_iam_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.awsIamEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_profile: {
      value: cdktn.stringToHclTerraform(struct!.awsProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_region: {
      value: cdktn.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.awsRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_role_session_name: {
      value: cdktn.stringToHclTerraform(struct!.awsRoleSessionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_secret_access_key: {
      value: cdktn.stringToHclTerraform(struct!.awsSecretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_session_token: {
      value: cdktn.stringToHclTerraform(struct!.awsSessionToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_shared_credentials_file: {
      value: cdktn.stringToHclTerraform(struct!.awsSharedCredentialsFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_sts_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.awsStsEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_web_identity_token_file: {
      value: cdktn.stringToHclTerraform(struct!.awsWebIdentityTokenFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktn.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount: {
      value: cdktn.stringToHclTerraform(struct!.mount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktn.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_root_namespace: {
      value: cdktn.booleanToHclTerraform(struct!.useRootNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface VaultProviderAuthLoginAzure {
  /**
  * The identity's client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#client_id VaultProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * A signed JSON Web Token. If not specified on will be created automatically
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#jwt VaultProvider#jwt}
  */
  readonly jwt?: string;
  /**
  * The path where the authentication engine is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#mount VaultProvider#mount}
  */
  readonly mount?: string;
  /**
  * The authentication engine's namespace. Conflicts with use_root_namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#namespace VaultProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * The resource group for the machine that generated the MSI token. This information can be obtained through instance metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#resource_group_name VaultProvider#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Name of the login role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#role VaultProvider#role}
  */
  readonly role: string;
  /**
  * The scopes to include in the token request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#scope VaultProvider#scope}
  */
  readonly scope?: string;
  /**
  * The subscription ID for the machine that generated the MSI token. This information can be obtained through instance metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#subscription_id VaultProvider#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * Provides the tenant ID to use in a multi-tenant authentication scenario.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#tenant_id VaultProvider#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Authenticate to the root Vault namespace. Conflicts with namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#use_root_namespace VaultProvider#use_root_namespace}
  */
  readonly useRootNamespace?: boolean | cdktn.IResolvable;
  /**
  * The virtual machine name for the machine that generated the MSI token. This information can be obtained through instance metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#vm_name VaultProvider#vm_name}
  */
  readonly vmName?: string;
  /**
  * The virtual machine scale set name for the machine that generated the MSI token. This information can be obtained through instance metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#vmss_name VaultProvider#vmss_name}
  */
  readonly vmssName?: string;
}

export function vaultProviderAuthLoginAzureToTerraform(struct?: VaultProviderAuthLoginAzure | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    jwt: cdktn.stringToTerraform(struct!.jwt),
    mount: cdktn.stringToTerraform(struct!.mount),
    namespace: cdktn.stringToTerraform(struct!.namespace),
    resource_group_name: cdktn.stringToTerraform(struct!.resourceGroupName),
    role: cdktn.stringToTerraform(struct!.role),
    scope: cdktn.stringToTerraform(struct!.scope),
    subscription_id: cdktn.stringToTerraform(struct!.subscriptionId),
    tenant_id: cdktn.stringToTerraform(struct!.tenantId),
    use_root_namespace: cdktn.booleanToTerraform(struct!.useRootNamespace),
    vm_name: cdktn.stringToTerraform(struct!.vmName),
    vmss_name: cdktn.stringToTerraform(struct!.vmssName),
  }
}


export function vaultProviderAuthLoginAzureToHclTerraform(struct?: VaultProviderAuthLoginAzure | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwt: {
      value: cdktn.stringToHclTerraform(struct!.jwt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount: {
      value: cdktn.stringToHclTerraform(struct!.mount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group_name: {
      value: cdktn.stringToHclTerraform(struct!.resourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktn.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktn.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_id: {
      value: cdktn.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktn.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_root_namespace: {
      value: cdktn.booleanToHclTerraform(struct!.useRootNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vm_name: {
      value: cdktn.stringToHclTerraform(struct!.vmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vmss_name: {
      value: cdktn.stringToHclTerraform(struct!.vmssName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface VaultProviderAuthLoginCert {
  /**
  * Path to a file containing the client certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#cert_file VaultProvider#cert_file}
  */
  readonly certFile: string;
  /**
  * Path to a file containing the private key that the certificate was issued for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#key_file VaultProvider#key_file}
  */
  readonly keyFile: string;
  /**
  * The path where the authentication engine is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#mount VaultProvider#mount}
  */
  readonly mount?: string;
  /**
  * Name of the certificate's role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#name VaultProvider#name}
  */
  readonly name?: string;
  /**
  * The authentication engine's namespace. Conflicts with use_root_namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#namespace VaultProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * Authenticate to the root Vault namespace. Conflicts with namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#use_root_namespace VaultProvider#use_root_namespace}
  */
  readonly useRootNamespace?: boolean | cdktn.IResolvable;
}

export function vaultProviderAuthLoginCertToTerraform(struct?: VaultProviderAuthLoginCert | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_file: cdktn.stringToTerraform(struct!.certFile),
    key_file: cdktn.stringToTerraform(struct!.keyFile),
    mount: cdktn.stringToTerraform(struct!.mount),
    name: cdktn.stringToTerraform(struct!.name),
    namespace: cdktn.stringToTerraform(struct!.namespace),
    use_root_namespace: cdktn.booleanToTerraform(struct!.useRootNamespace),
  }
}


export function vaultProviderAuthLoginCertToHclTerraform(struct?: VaultProviderAuthLoginCert | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_file: {
      value: cdktn.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktn.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount: {
      value: cdktn.stringToHclTerraform(struct!.mount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_root_namespace: {
      value: cdktn.booleanToHclTerraform(struct!.useRootNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface VaultProviderAuthLoginGcp {
  /**
  * Path to the Google Cloud credentials file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#credentials VaultProvider#credentials}
  */
  readonly credentials?: string;
  /**
  * A signed JSON Web Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#jwt VaultProvider#jwt}
  */
  readonly jwt?: string;
  /**
  * The path where the authentication engine is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#mount VaultProvider#mount}
  */
  readonly mount?: string;
  /**
  * The authentication engine's namespace. Conflicts with use_root_namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#namespace VaultProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * Name of the login role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#role VaultProvider#role}
  */
  readonly role: string;
  /**
  * IAM service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#service_account VaultProvider#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Authenticate to the root Vault namespace. Conflicts with namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#use_root_namespace VaultProvider#use_root_namespace}
  */
  readonly useRootNamespace?: boolean | cdktn.IResolvable;
}

export function vaultProviderAuthLoginGcpToTerraform(struct?: VaultProviderAuthLoginGcp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: cdktn.stringToTerraform(struct!.credentials),
    jwt: cdktn.stringToTerraform(struct!.jwt),
    mount: cdktn.stringToTerraform(struct!.mount),
    namespace: cdktn.stringToTerraform(struct!.namespace),
    role: cdktn.stringToTerraform(struct!.role),
    service_account: cdktn.stringToTerraform(struct!.serviceAccount),
    use_root_namespace: cdktn.booleanToTerraform(struct!.useRootNamespace),
  }
}


export function vaultProviderAuthLoginGcpToHclTerraform(struct?: VaultProviderAuthLoginGcp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials: {
      value: cdktn.stringToHclTerraform(struct!.credentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwt: {
      value: cdktn.stringToHclTerraform(struct!.jwt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount: {
      value: cdktn.stringToHclTerraform(struct!.mount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktn.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_root_namespace: {
      value: cdktn.booleanToHclTerraform(struct!.useRootNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface VaultProviderAuthLoginJwt {
  /**
  * A signed JSON Web Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#jwt VaultProvider#jwt}
  */
  readonly jwt?: string;
  /**
  * The path where the authentication engine is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#mount VaultProvider#mount}
  */
  readonly mount?: string;
  /**
  * The authentication engine's namespace. Conflicts with use_root_namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#namespace VaultProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * Name of the login role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#role VaultProvider#role}
  */
  readonly role: string;
  /**
  * Authenticate to the root Vault namespace. Conflicts with namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#use_root_namespace VaultProvider#use_root_namespace}
  */
  readonly useRootNamespace?: boolean | cdktn.IResolvable;
}

export function vaultProviderAuthLoginJwtToTerraform(struct?: VaultProviderAuthLoginJwt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jwt: cdktn.stringToTerraform(struct!.jwt),
    mount: cdktn.stringToTerraform(struct!.mount),
    namespace: cdktn.stringToTerraform(struct!.namespace),
    role: cdktn.stringToTerraform(struct!.role),
    use_root_namespace: cdktn.booleanToTerraform(struct!.useRootNamespace),
  }
}


export function vaultProviderAuthLoginJwtToHclTerraform(struct?: VaultProviderAuthLoginJwt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jwt: {
      value: cdktn.stringToHclTerraform(struct!.jwt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount: {
      value: cdktn.stringToHclTerraform(struct!.mount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktn.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_root_namespace: {
      value: cdktn.booleanToHclTerraform(struct!.useRootNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface VaultProviderAuthLoginKerberos {
  /**
  * Disable the Kerberos FAST negotiation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#disable_fast_negotiation VaultProvider#disable_fast_negotiation}
  */
  readonly disableFastNegotiation?: boolean | cdktn.IResolvable;
  /**
  * The Kerberos keytab file containing the entry of the login entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#keytab_path VaultProvider#keytab_path}
  */
  readonly keytabPath?: string;
  /**
  * A valid Kerberos configuration file e.g. /etc/krb5.conf.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#krb5conf_path VaultProvider#krb5conf_path}
  */
  readonly krb5ConfPath?: string;
  /**
  * The path where the authentication engine is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#mount VaultProvider#mount}
  */
  readonly mount?: string;
  /**
  * The authentication engine's namespace. Conflicts with use_root_namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#namespace VaultProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * The Kerberos server's authoritative authentication domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#realm VaultProvider#realm}
  */
  readonly realm?: string;
  /**
  * Strip the host from the username found in the keytab.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#remove_instance_name VaultProvider#remove_instance_name}
  */
  readonly removeInstanceName?: boolean | cdktn.IResolvable;
  /**
  * The service principle name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#service VaultProvider#service}
  */
  readonly service?: string;
  /**
  * Simple and Protected GSSAPI Negotiation Mechanism (SPNEGO) token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#token VaultProvider#token}
  */
  readonly token?: string;
  /**
  * Authenticate to the root Vault namespace. Conflicts with namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#use_root_namespace VaultProvider#use_root_namespace}
  */
  readonly useRootNamespace?: boolean | cdktn.IResolvable;
  /**
  * The username to login into Kerberos with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#username VaultProvider#username}
  */
  readonly username?: string;
}

export function vaultProviderAuthLoginKerberosToTerraform(struct?: VaultProviderAuthLoginKerberos | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_fast_negotiation: cdktn.booleanToTerraform(struct!.disableFastNegotiation),
    keytab_path: cdktn.stringToTerraform(struct!.keytabPath),
    krb5conf_path: cdktn.stringToTerraform(struct!.krb5ConfPath),
    mount: cdktn.stringToTerraform(struct!.mount),
    namespace: cdktn.stringToTerraform(struct!.namespace),
    realm: cdktn.stringToTerraform(struct!.realm),
    remove_instance_name: cdktn.booleanToTerraform(struct!.removeInstanceName),
    service: cdktn.stringToTerraform(struct!.service),
    token: cdktn.stringToTerraform(struct!.token),
    use_root_namespace: cdktn.booleanToTerraform(struct!.useRootNamespace),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function vaultProviderAuthLoginKerberosToHclTerraform(struct?: VaultProviderAuthLoginKerberos | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_fast_negotiation: {
      value: cdktn.booleanToHclTerraform(struct!.disableFastNegotiation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keytab_path: {
      value: cdktn.stringToHclTerraform(struct!.keytabPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    krb5conf_path: {
      value: cdktn.stringToHclTerraform(struct!.krb5ConfPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount: {
      value: cdktn.stringToHclTerraform(struct!.mount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    realm: {
      value: cdktn.stringToHclTerraform(struct!.realm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_instance_name: {
      value: cdktn.booleanToHclTerraform(struct!.removeInstanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service: {
      value: cdktn.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktn.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_root_namespace: {
      value: cdktn.booleanToHclTerraform(struct!.useRootNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface VaultProviderAuthLoginOci {
  /**
  * Authentication type to use when getting OCI credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#auth_type VaultProvider#auth_type}
  */
  readonly authType: string;
  /**
  * The path where the authentication engine is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#mount VaultProvider#mount}
  */
  readonly mount?: string;
  /**
  * The authentication engine's namespace. Conflicts with use_root_namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#namespace VaultProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * Name of the login role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#role VaultProvider#role}
  */
  readonly role: string;
  /**
  * Authenticate to the root Vault namespace. Conflicts with namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#use_root_namespace VaultProvider#use_root_namespace}
  */
  readonly useRootNamespace?: boolean | cdktn.IResolvable;
}

export function vaultProviderAuthLoginOciToTerraform(struct?: VaultProviderAuthLoginOci | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktn.stringToTerraform(struct!.authType),
    mount: cdktn.stringToTerraform(struct!.mount),
    namespace: cdktn.stringToTerraform(struct!.namespace),
    role: cdktn.stringToTerraform(struct!.role),
    use_root_namespace: cdktn.booleanToTerraform(struct!.useRootNamespace),
  }
}


export function vaultProviderAuthLoginOciToHclTerraform(struct?: VaultProviderAuthLoginOci | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktn.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount: {
      value: cdktn.stringToHclTerraform(struct!.mount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktn.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_root_namespace: {
      value: cdktn.booleanToHclTerraform(struct!.useRootNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface VaultProviderAuthLoginOidc {
  /**
  * The callback address. Must be a valid URI without the path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#callback_address VaultProvider#callback_address}
  */
  readonly callbackAddress?: string;
  /**
  * The callback listener's address. Must be a valid URI without the path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#callback_listener_address VaultProvider#callback_listener_address}
  */
  readonly callbackListenerAddress?: string;
  /**
  * The path where the authentication engine is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#mount VaultProvider#mount}
  */
  readonly mount?: string;
  /**
  * The authentication engine's namespace. Conflicts with use_root_namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#namespace VaultProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * Name of the login role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#role VaultProvider#role}
  */
  readonly role: string;
  /**
  * Authenticate to the root Vault namespace. Conflicts with namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#use_root_namespace VaultProvider#use_root_namespace}
  */
  readonly useRootNamespace?: boolean | cdktn.IResolvable;
}

export function vaultProviderAuthLoginOidcToTerraform(struct?: VaultProviderAuthLoginOidc | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    callback_address: cdktn.stringToTerraform(struct!.callbackAddress),
    callback_listener_address: cdktn.stringToTerraform(struct!.callbackListenerAddress),
    mount: cdktn.stringToTerraform(struct!.mount),
    namespace: cdktn.stringToTerraform(struct!.namespace),
    role: cdktn.stringToTerraform(struct!.role),
    use_root_namespace: cdktn.booleanToTerraform(struct!.useRootNamespace),
  }
}


export function vaultProviderAuthLoginOidcToHclTerraform(struct?: VaultProviderAuthLoginOidc | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    callback_address: {
      value: cdktn.stringToHclTerraform(struct!.callbackAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    callback_listener_address: {
      value: cdktn.stringToHclTerraform(struct!.callbackListenerAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount: {
      value: cdktn.stringToHclTerraform(struct!.mount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktn.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_root_namespace: {
      value: cdktn.booleanToHclTerraform(struct!.useRootNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface VaultProviderAuthLoginRadius {
  /**
  * The path where the authentication engine is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#mount VaultProvider#mount}
  */
  readonly mount?: string;
  /**
  * The authentication engine's namespace. Conflicts with use_root_namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#namespace VaultProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * The Radius password for username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#password VaultProvider#password}
  */
  readonly password?: string;
  /**
  * Authenticate to the root Vault namespace. Conflicts with namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#use_root_namespace VaultProvider#use_root_namespace}
  */
  readonly useRootNamespace?: boolean | cdktn.IResolvable;
  /**
  * The Radius username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#username VaultProvider#username}
  */
  readonly username?: string;
}

export function vaultProviderAuthLoginRadiusToTerraform(struct?: VaultProviderAuthLoginRadius | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount: cdktn.stringToTerraform(struct!.mount),
    namespace: cdktn.stringToTerraform(struct!.namespace),
    password: cdktn.stringToTerraform(struct!.password),
    use_root_namespace: cdktn.booleanToTerraform(struct!.useRootNamespace),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function vaultProviderAuthLoginRadiusToHclTerraform(struct?: VaultProviderAuthLoginRadius | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount: {
      value: cdktn.stringToHclTerraform(struct!.mount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_root_namespace: {
      value: cdktn.booleanToHclTerraform(struct!.useRootNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface VaultProviderAuthLoginTokenFile {
  /**
  * The name of a file containing a single line that is a valid Vault token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#filename VaultProvider#filename}
  */
  readonly filename?: string;
  /**
  * The authentication engine's namespace. Conflicts with use_root_namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#namespace VaultProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * Authenticate to the root Vault namespace. Conflicts with namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#use_root_namespace VaultProvider#use_root_namespace}
  */
  readonly useRootNamespace?: boolean | cdktn.IResolvable;
}

export function vaultProviderAuthLoginTokenFileToTerraform(struct?: VaultProviderAuthLoginTokenFile | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filename: cdktn.stringToTerraform(struct!.filename),
    namespace: cdktn.stringToTerraform(struct!.namespace),
    use_root_namespace: cdktn.booleanToTerraform(struct!.useRootNamespace),
  }
}


export function vaultProviderAuthLoginTokenFileToHclTerraform(struct?: VaultProviderAuthLoginTokenFile | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filename: {
      value: cdktn.stringToHclTerraform(struct!.filename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_root_namespace: {
      value: cdktn.booleanToHclTerraform(struct!.useRootNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface VaultProviderAuthLoginUserpass {
  /**
  * The path where the authentication engine is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#mount VaultProvider#mount}
  */
  readonly mount?: string;
  /**
  * The authentication engine's namespace. Conflicts with use_root_namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#namespace VaultProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * Login with password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#password VaultProvider#password}
  */
  readonly password?: string;
  /**
  * Login with password from a file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#password_file VaultProvider#password_file}
  */
  readonly passwordFile?: string;
  /**
  * Authenticate to the root Vault namespace. Conflicts with namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#use_root_namespace VaultProvider#use_root_namespace}
  */
  readonly useRootNamespace?: boolean | cdktn.IResolvable;
  /**
  * Login with username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#username VaultProvider#username}
  */
  readonly username?: string;
}

export function vaultProviderAuthLoginUserpassToTerraform(struct?: VaultProviderAuthLoginUserpass | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount: cdktn.stringToTerraform(struct!.mount),
    namespace: cdktn.stringToTerraform(struct!.namespace),
    password: cdktn.stringToTerraform(struct!.password),
    password_file: cdktn.stringToTerraform(struct!.passwordFile),
    use_root_namespace: cdktn.booleanToTerraform(struct!.useRootNamespace),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function vaultProviderAuthLoginUserpassToHclTerraform(struct?: VaultProviderAuthLoginUserpass | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount: {
      value: cdktn.stringToHclTerraform(struct!.mount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_file: {
      value: cdktn.stringToHclTerraform(struct!.passwordFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_root_namespace: {
      value: cdktn.booleanToHclTerraform(struct!.useRootNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface VaultProviderClientAuth {
  /**
  * Path to a file containing the client certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#cert_file VaultProvider#cert_file}
  */
  readonly certFile: string;
  /**
  * Path to a file containing the private key that the certificate was issued for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#key_file VaultProvider#key_file}
  */
  readonly keyFile: string;
}

export function vaultProviderClientAuthToTerraform(struct?: VaultProviderClientAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_file: cdktn.stringToTerraform(struct!.certFile),
    key_file: cdktn.stringToTerraform(struct!.keyFile),
  }
}


export function vaultProviderClientAuthToHclTerraform(struct?: VaultProviderClientAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_file: {
      value: cdktn.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktn.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface VaultProviderHeaders {
  /**
  * The header name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#name VaultProvider#name}
  */
  readonly name: string;
  /**
  * The header value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#value VaultProvider#value}
  */
  readonly value: string;
}

export function vaultProviderHeadersToTerraform(struct?: VaultProviderHeaders | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function vaultProviderHeadersToHclTerraform(struct?: VaultProviderHeaders | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs vault}
*/
export class VaultProvider extends cdktn.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a VaultProvider resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VaultProvider to import
  * @param importFromId The id of the existing VaultProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VaultProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs vault} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VaultProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VaultProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vault',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.7.0',
        providerVersionConstraint: '~> 5.0'
      },
      terraformProviderSource: 'hashicorp/vault'
    });
    this._addAddressToEnv = config.addAddressToEnv;
    this._address = config.address;
    this._caCertDir = config.caCertDir;
    this._caCertFile = config.caCertFile;
    this._maxLeaseTtlSeconds = config.maxLeaseTtlSeconds;
    this._maxRetries = config.maxRetries;
    this._maxRetriesCcc = config.maxRetriesCcc;
    this._namespace = config.namespace;
    this._setNamespaceFromToken = config.setNamespaceFromToken;
    this._skipChildToken = config.skipChildToken;
    this._skipGetVaultVersion = config.skipGetVaultVersion;
    this._skipTlsVerify = config.skipTlsVerify;
    this._tlsServerName = config.tlsServerName;
    this._token = config.token;
    this._tokenName = config.tokenName;
    this._vaultVersionOverride = config.vaultVersionOverride;
    this._alias = config.alias;
    this._authLogin = config.authLogin;
    this._authLoginAws = config.authLoginAws;
    this._authLoginAzure = config.authLoginAzure;
    this._authLoginCert = config.authLoginCert;
    this._authLoginGcp = config.authLoginGcp;
    this._authLoginJwt = config.authLoginJwt;
    this._authLoginKerberos = config.authLoginKerberos;
    this._authLoginOci = config.authLoginOci;
    this._authLoginOidc = config.authLoginOidc;
    this._authLoginRadius = config.authLoginRadius;
    this._authLoginTokenFile = config.authLoginTokenFile;
    this._authLoginUserpass = config.authLoginUserpass;
    this._clientAuth = config.clientAuth;
    this._headers = config.headers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_address_to_env - computed: false, optional: true, required: false
  private _addAddressToEnv?: string; 
  public get addAddressToEnv() {
    return this._addAddressToEnv;
  }
  public set addAddressToEnv(value: string | undefined) {
    this._addAddressToEnv = value;
  }
  public resetAddAddressToEnv() {
    this._addAddressToEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addAddressToEnvInput() {
    return this._addAddressToEnv;
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this._address;
  }
  public set address(value: string | undefined) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // ca_cert_dir - computed: false, optional: true, required: false
  private _caCertDir?: string; 
  public get caCertDir() {
    return this._caCertDir;
  }
  public set caCertDir(value: string | undefined) {
    this._caCertDir = value;
  }
  public resetCaCertDir() {
    this._caCertDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertDirInput() {
    return this._caCertDir;
  }

  // ca_cert_file - computed: false, optional: true, required: false
  private _caCertFile?: string; 
  public get caCertFile() {
    return this._caCertFile;
  }
  public set caCertFile(value: string | undefined) {
    this._caCertFile = value;
  }
  public resetCaCertFile() {
    this._caCertFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertFileInput() {
    return this._caCertFile;
  }

  // max_lease_ttl_seconds - computed: false, optional: true, required: false
  private _maxLeaseTtlSeconds?: number; 
  public get maxLeaseTtlSeconds() {
    return this._maxLeaseTtlSeconds;
  }
  public set maxLeaseTtlSeconds(value: number | undefined) {
    this._maxLeaseTtlSeconds = value;
  }
  public resetMaxLeaseTtlSeconds() {
    this._maxLeaseTtlSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLeaseTtlSecondsInput() {
    return this._maxLeaseTtlSeconds;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this._maxRetries;
  }
  public set maxRetries(value: number | undefined) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // max_retries_ccc - computed: false, optional: true, required: false
  private _maxRetriesCcc?: number; 
  public get maxRetriesCcc() {
    return this._maxRetriesCcc;
  }
  public set maxRetriesCcc(value: number | undefined) {
    this._maxRetriesCcc = value;
  }
  public resetMaxRetriesCcc() {
    this._maxRetriesCcc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesCccInput() {
    return this._maxRetriesCcc;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this._namespace;
  }
  public set namespace(value: string | undefined) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // set_namespace_from_token - computed: false, optional: true, required: false
  private _setNamespaceFromToken?: boolean | cdktn.IResolvable; 
  public get setNamespaceFromToken() {
    return this._setNamespaceFromToken;
  }
  public set setNamespaceFromToken(value: boolean | cdktn.IResolvable | undefined) {
    this._setNamespaceFromToken = value;
  }
  public resetSetNamespaceFromToken() {
    this._setNamespaceFromToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setNamespaceFromTokenInput() {
    return this._setNamespaceFromToken;
  }

  // skip_child_token - computed: false, optional: true, required: false
  private _skipChildToken?: boolean | cdktn.IResolvable; 
  public get skipChildToken() {
    return this._skipChildToken;
  }
  public set skipChildToken(value: boolean | cdktn.IResolvable | undefined) {
    this._skipChildToken = value;
  }
  public resetSkipChildToken() {
    this._skipChildToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipChildTokenInput() {
    return this._skipChildToken;
  }

  // skip_get_vault_version - computed: false, optional: true, required: false
  private _skipGetVaultVersion?: boolean | cdktn.IResolvable; 
  public get skipGetVaultVersion() {
    return this._skipGetVaultVersion;
  }
  public set skipGetVaultVersion(value: boolean | cdktn.IResolvable | undefined) {
    this._skipGetVaultVersion = value;
  }
  public resetSkipGetVaultVersion() {
    this._skipGetVaultVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipGetVaultVersionInput() {
    return this._skipGetVaultVersion;
  }

  // skip_tls_verify - computed: false, optional: true, required: false
  private _skipTlsVerify?: boolean | cdktn.IResolvable; 
  public get skipTlsVerify() {
    return this._skipTlsVerify;
  }
  public set skipTlsVerify(value: boolean | cdktn.IResolvable | undefined) {
    this._skipTlsVerify = value;
  }
  public resetSkipTlsVerify() {
    this._skipTlsVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipTlsVerifyInput() {
    return this._skipTlsVerify;
  }

  // tls_server_name - computed: false, optional: true, required: false
  private _tlsServerName?: string; 
  public get tlsServerName() {
    return this._tlsServerName;
  }
  public set tlsServerName(value: string | undefined) {
    this._tlsServerName = value;
  }
  public resetTlsServerName() {
    this._tlsServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsServerNameInput() {
    return this._tlsServerName;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // token_name - computed: false, optional: true, required: false
  private _tokenName?: string; 
  public get tokenName() {
    return this._tokenName;
  }
  public set tokenName(value: string | undefined) {
    this._tokenName = value;
  }
  public resetTokenName() {
    this._tokenName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenNameInput() {
    return this._tokenName;
  }

  // vault_version_override - computed: false, optional: true, required: false
  private _vaultVersionOverride?: string; 
  public get vaultVersionOverride() {
    return this._vaultVersionOverride;
  }
  public set vaultVersionOverride(value: string | undefined) {
    this._vaultVersionOverride = value;
  }
  public resetVaultVersionOverride() {
    this._vaultVersionOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultVersionOverrideInput() {
    return this._vaultVersionOverride;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // auth_login - computed: false, optional: true, required: false
  private _authLogin?: VaultProviderAuthLogin[] | cdktn.IResolvable; 
  public get authLogin() {
    return this._authLogin;
  }
  public set authLogin(value: VaultProviderAuthLogin[] | cdktn.IResolvable | undefined) {
    this._authLogin = value;
  }
  public resetAuthLogin() {
    this._authLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authLoginInput() {
    return this._authLogin;
  }

  // auth_login_aws - computed: false, optional: true, required: false
  private _authLoginAws?: VaultProviderAuthLoginAws[] | cdktn.IResolvable; 
  public get authLoginAws() {
    return this._authLoginAws;
  }
  public set authLoginAws(value: VaultProviderAuthLoginAws[] | cdktn.IResolvable | undefined) {
    this._authLoginAws = value;
  }
  public resetAuthLoginAws() {
    this._authLoginAws = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authLoginAwsInput() {
    return this._authLoginAws;
  }

  // auth_login_azure - computed: false, optional: true, required: false
  private _authLoginAzure?: VaultProviderAuthLoginAzure[] | cdktn.IResolvable; 
  public get authLoginAzure() {
    return this._authLoginAzure;
  }
  public set authLoginAzure(value: VaultProviderAuthLoginAzure[] | cdktn.IResolvable | undefined) {
    this._authLoginAzure = value;
  }
  public resetAuthLoginAzure() {
    this._authLoginAzure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authLoginAzureInput() {
    return this._authLoginAzure;
  }

  // auth_login_cert - computed: false, optional: true, required: false
  private _authLoginCert?: VaultProviderAuthLoginCert[] | cdktn.IResolvable; 
  public get authLoginCert() {
    return this._authLoginCert;
  }
  public set authLoginCert(value: VaultProviderAuthLoginCert[] | cdktn.IResolvable | undefined) {
    this._authLoginCert = value;
  }
  public resetAuthLoginCert() {
    this._authLoginCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authLoginCertInput() {
    return this._authLoginCert;
  }

  // auth_login_gcp - computed: false, optional: true, required: false
  private _authLoginGcp?: VaultProviderAuthLoginGcp[] | cdktn.IResolvable; 
  public get authLoginGcp() {
    return this._authLoginGcp;
  }
  public set authLoginGcp(value: VaultProviderAuthLoginGcp[] | cdktn.IResolvable | undefined) {
    this._authLoginGcp = value;
  }
  public resetAuthLoginGcp() {
    this._authLoginGcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authLoginGcpInput() {
    return this._authLoginGcp;
  }

  // auth_login_jwt - computed: false, optional: true, required: false
  private _authLoginJwt?: VaultProviderAuthLoginJwt[] | cdktn.IResolvable; 
  public get authLoginJwt() {
    return this._authLoginJwt;
  }
  public set authLoginJwt(value: VaultProviderAuthLoginJwt[] | cdktn.IResolvable | undefined) {
    this._authLoginJwt = value;
  }
  public resetAuthLoginJwt() {
    this._authLoginJwt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authLoginJwtInput() {
    return this._authLoginJwt;
  }

  // auth_login_kerberos - computed: false, optional: true, required: false
  private _authLoginKerberos?: VaultProviderAuthLoginKerberos[] | cdktn.IResolvable; 
  public get authLoginKerberos() {
    return this._authLoginKerberos;
  }
  public set authLoginKerberos(value: VaultProviderAuthLoginKerberos[] | cdktn.IResolvable | undefined) {
    this._authLoginKerberos = value;
  }
  public resetAuthLoginKerberos() {
    this._authLoginKerberos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authLoginKerberosInput() {
    return this._authLoginKerberos;
  }

  // auth_login_oci - computed: false, optional: true, required: false
  private _authLoginOci?: VaultProviderAuthLoginOci[] | cdktn.IResolvable; 
  public get authLoginOci() {
    return this._authLoginOci;
  }
  public set authLoginOci(value: VaultProviderAuthLoginOci[] | cdktn.IResolvable | undefined) {
    this._authLoginOci = value;
  }
  public resetAuthLoginOci() {
    this._authLoginOci = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authLoginOciInput() {
    return this._authLoginOci;
  }

  // auth_login_oidc - computed: false, optional: true, required: false
  private _authLoginOidc?: VaultProviderAuthLoginOidc[] | cdktn.IResolvable; 
  public get authLoginOidc() {
    return this._authLoginOidc;
  }
  public set authLoginOidc(value: VaultProviderAuthLoginOidc[] | cdktn.IResolvable | undefined) {
    this._authLoginOidc = value;
  }
  public resetAuthLoginOidc() {
    this._authLoginOidc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authLoginOidcInput() {
    return this._authLoginOidc;
  }

  // auth_login_radius - computed: false, optional: true, required: false
  private _authLoginRadius?: VaultProviderAuthLoginRadius[] | cdktn.IResolvable; 
  public get authLoginRadius() {
    return this._authLoginRadius;
  }
  public set authLoginRadius(value: VaultProviderAuthLoginRadius[] | cdktn.IResolvable | undefined) {
    this._authLoginRadius = value;
  }
  public resetAuthLoginRadius() {
    this._authLoginRadius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authLoginRadiusInput() {
    return this._authLoginRadius;
  }

  // auth_login_token_file - computed: false, optional: true, required: false
  private _authLoginTokenFile?: VaultProviderAuthLoginTokenFile[] | cdktn.IResolvable; 
  public get authLoginTokenFile() {
    return this._authLoginTokenFile;
  }
  public set authLoginTokenFile(value: VaultProviderAuthLoginTokenFile[] | cdktn.IResolvable | undefined) {
    this._authLoginTokenFile = value;
  }
  public resetAuthLoginTokenFile() {
    this._authLoginTokenFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authLoginTokenFileInput() {
    return this._authLoginTokenFile;
  }

  // auth_login_userpass - computed: false, optional: true, required: false
  private _authLoginUserpass?: VaultProviderAuthLoginUserpass[] | cdktn.IResolvable; 
  public get authLoginUserpass() {
    return this._authLoginUserpass;
  }
  public set authLoginUserpass(value: VaultProviderAuthLoginUserpass[] | cdktn.IResolvable | undefined) {
    this._authLoginUserpass = value;
  }
  public resetAuthLoginUserpass() {
    this._authLoginUserpass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authLoginUserpassInput() {
    return this._authLoginUserpass;
  }

  // client_auth - computed: false, optional: true, required: false
  private _clientAuth?: VaultProviderClientAuth[] | cdktn.IResolvable; 
  public get clientAuth() {
    return this._clientAuth;
  }
  public set clientAuth(value: VaultProviderClientAuth[] | cdktn.IResolvable | undefined) {
    this._clientAuth = value;
  }
  public resetClientAuth() {
    this._clientAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthInput() {
    return this._clientAuth;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: VaultProviderHeaders[] | cdktn.IResolvable; 
  public get headers() {
    return this._headers;
  }
  public set headers(value: VaultProviderHeaders[] | cdktn.IResolvable | undefined) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_address_to_env: cdktn.stringToTerraform(this._addAddressToEnv),
      address: cdktn.stringToTerraform(this._address),
      ca_cert_dir: cdktn.stringToTerraform(this._caCertDir),
      ca_cert_file: cdktn.stringToTerraform(this._caCertFile),
      max_lease_ttl_seconds: cdktn.numberToTerraform(this._maxLeaseTtlSeconds),
      max_retries: cdktn.numberToTerraform(this._maxRetries),
      max_retries_ccc: cdktn.numberToTerraform(this._maxRetriesCcc),
      namespace: cdktn.stringToTerraform(this._namespace),
      set_namespace_from_token: cdktn.booleanToTerraform(this._setNamespaceFromToken),
      skip_child_token: cdktn.booleanToTerraform(this._skipChildToken),
      skip_get_vault_version: cdktn.booleanToTerraform(this._skipGetVaultVersion),
      skip_tls_verify: cdktn.booleanToTerraform(this._skipTlsVerify),
      tls_server_name: cdktn.stringToTerraform(this._tlsServerName),
      token: cdktn.stringToTerraform(this._token),
      token_name: cdktn.stringToTerraform(this._tokenName),
      vault_version_override: cdktn.stringToTerraform(this._vaultVersionOverride),
      alias: cdktn.stringToTerraform(this._alias),
      auth_login: cdktn.listMapper(vaultProviderAuthLoginToTerraform, true)(this._authLogin),
      auth_login_aws: cdktn.listMapper(vaultProviderAuthLoginAwsToTerraform, true)(this._authLoginAws),
      auth_login_azure: cdktn.listMapper(vaultProviderAuthLoginAzureToTerraform, true)(this._authLoginAzure),
      auth_login_cert: cdktn.listMapper(vaultProviderAuthLoginCertToTerraform, true)(this._authLoginCert),
      auth_login_gcp: cdktn.listMapper(vaultProviderAuthLoginGcpToTerraform, true)(this._authLoginGcp),
      auth_login_jwt: cdktn.listMapper(vaultProviderAuthLoginJwtToTerraform, true)(this._authLoginJwt),
      auth_login_kerberos: cdktn.listMapper(vaultProviderAuthLoginKerberosToTerraform, true)(this._authLoginKerberos),
      auth_login_oci: cdktn.listMapper(vaultProviderAuthLoginOciToTerraform, true)(this._authLoginOci),
      auth_login_oidc: cdktn.listMapper(vaultProviderAuthLoginOidcToTerraform, true)(this._authLoginOidc),
      auth_login_radius: cdktn.listMapper(vaultProviderAuthLoginRadiusToTerraform, true)(this._authLoginRadius),
      auth_login_token_file: cdktn.listMapper(vaultProviderAuthLoginTokenFileToTerraform, true)(this._authLoginTokenFile),
      auth_login_userpass: cdktn.listMapper(vaultProviderAuthLoginUserpassToTerraform, true)(this._authLoginUserpass),
      client_auth: cdktn.listMapper(vaultProviderClientAuthToTerraform, true)(this._clientAuth),
      headers: cdktn.listMapper(vaultProviderHeadersToTerraform, true)(this._headers),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_address_to_env: {
        value: cdktn.stringToHclTerraform(this._addAddressToEnv),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address: {
        value: cdktn.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_cert_dir: {
        value: cdktn.stringToHclTerraform(this._caCertDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_cert_file: {
        value: cdktn.stringToHclTerraform(this._caCertFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_lease_ttl_seconds: {
        value: cdktn.numberToHclTerraform(this._maxLeaseTtlSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_retries: {
        value: cdktn.numberToHclTerraform(this._maxRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_retries_ccc: {
        value: cdktn.numberToHclTerraform(this._maxRetriesCcc),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      namespace: {
        value: cdktn.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_namespace_from_token: {
        value: cdktn.booleanToHclTerraform(this._setNamespaceFromToken),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_child_token: {
        value: cdktn.booleanToHclTerraform(this._skipChildToken),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_get_vault_version: {
        value: cdktn.booleanToHclTerraform(this._skipGetVaultVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_tls_verify: {
        value: cdktn.booleanToHclTerraform(this._skipTlsVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tls_server_name: {
        value: cdktn.stringToHclTerraform(this._tlsServerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token: {
        value: cdktn.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_name: {
        value: cdktn.stringToHclTerraform(this._tokenName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_version_override: {
        value: cdktn.stringToHclTerraform(this._vaultVersionOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktn.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_login: {
        value: cdktn.listMapperHcl(vaultProviderAuthLoginToHclTerraform, true)(this._authLogin),
        isBlock: true,
        type: "list",
        storageClassType: "VaultProviderAuthLoginList",
      },
      auth_login_aws: {
        value: cdktn.listMapperHcl(vaultProviderAuthLoginAwsToHclTerraform, true)(this._authLoginAws),
        isBlock: true,
        type: "list",
        storageClassType: "VaultProviderAuthLoginAwsList",
      },
      auth_login_azure: {
        value: cdktn.listMapperHcl(vaultProviderAuthLoginAzureToHclTerraform, true)(this._authLoginAzure),
        isBlock: true,
        type: "list",
        storageClassType: "VaultProviderAuthLoginAzureList",
      },
      auth_login_cert: {
        value: cdktn.listMapperHcl(vaultProviderAuthLoginCertToHclTerraform, true)(this._authLoginCert),
        isBlock: true,
        type: "list",
        storageClassType: "VaultProviderAuthLoginCertList",
      },
      auth_login_gcp: {
        value: cdktn.listMapperHcl(vaultProviderAuthLoginGcpToHclTerraform, true)(this._authLoginGcp),
        isBlock: true,
        type: "list",
        storageClassType: "VaultProviderAuthLoginGcpList",
      },
      auth_login_jwt: {
        value: cdktn.listMapperHcl(vaultProviderAuthLoginJwtToHclTerraform, true)(this._authLoginJwt),
        isBlock: true,
        type: "list",
        storageClassType: "VaultProviderAuthLoginJwtList",
      },
      auth_login_kerberos: {
        value: cdktn.listMapperHcl(vaultProviderAuthLoginKerberosToHclTerraform, true)(this._authLoginKerberos),
        isBlock: true,
        type: "list",
        storageClassType: "VaultProviderAuthLoginKerberosList",
      },
      auth_login_oci: {
        value: cdktn.listMapperHcl(vaultProviderAuthLoginOciToHclTerraform, true)(this._authLoginOci),
        isBlock: true,
        type: "list",
        storageClassType: "VaultProviderAuthLoginOciList",
      },
      auth_login_oidc: {
        value: cdktn.listMapperHcl(vaultProviderAuthLoginOidcToHclTerraform, true)(this._authLoginOidc),
        isBlock: true,
        type: "list",
        storageClassType: "VaultProviderAuthLoginOidcList",
      },
      auth_login_radius: {
        value: cdktn.listMapperHcl(vaultProviderAuthLoginRadiusToHclTerraform, true)(this._authLoginRadius),
        isBlock: true,
        type: "list",
        storageClassType: "VaultProviderAuthLoginRadiusList",
      },
      auth_login_token_file: {
        value: cdktn.listMapperHcl(vaultProviderAuthLoginTokenFileToHclTerraform, true)(this._authLoginTokenFile),
        isBlock: true,
        type: "list",
        storageClassType: "VaultProviderAuthLoginTokenFileList",
      },
      auth_login_userpass: {
        value: cdktn.listMapperHcl(vaultProviderAuthLoginUserpassToHclTerraform, true)(this._authLoginUserpass),
        isBlock: true,
        type: "list",
        storageClassType: "VaultProviderAuthLoginUserpassList",
      },
      client_auth: {
        value: cdktn.listMapperHcl(vaultProviderClientAuthToHclTerraform, true)(this._clientAuth),
        isBlock: true,
        type: "list",
        storageClassType: "VaultProviderClientAuthList",
      },
      headers: {
        value: cdktn.listMapperHcl(vaultProviderHeadersToHclTerraform, true)(this._headers),
        isBlock: true,
        type: "list",
        storageClassType: "VaultProviderHeadersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
