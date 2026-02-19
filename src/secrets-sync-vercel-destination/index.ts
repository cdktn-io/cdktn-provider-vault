/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_vercel_destination
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SecretsSyncVercelDestinationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Vercel API access token with the permissions to manage environment variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_vercel_destination#access_token SecretsSyncVercelDestination#access_token}
  */
  readonly accessToken: string;
  /**
  * Set of allowed IPv4 addresses in CIDR notation (e.g., 192.168.1.1/32) for outbound connections from Vault to the destination. If not set, all IPv4 addresses are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_vercel_destination#allowed_ipv4_addresses SecretsSyncVercelDestination#allowed_ipv4_addresses}
  */
  readonly allowedIpv4Addresses?: string[];
  /**
  * Set of allowed IPv6 addresses in CIDR notation (e.g., 2001:db8::1/128) for outbound connections from Vault to the destination. If not set, all IPv6 addresses are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_vercel_destination#allowed_ipv6_addresses SecretsSyncVercelDestination#allowed_ipv6_addresses}
  */
  readonly allowedIpv6Addresses?: string[];
  /**
  * Set of allowed ports for outbound connections from Vault to the destination. If not set, all ports are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_vercel_destination#allowed_ports SecretsSyncVercelDestination#allowed_ports}
  */
  readonly allowedPorts?: number[];
  /**
  * Deployment environments where the environment variables are available. Accepts 'development', 'preview' & 'production'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_vercel_destination#deployment_environments SecretsSyncVercelDestination#deployment_environments}
  */
  readonly deploymentEnvironments: string[];
  /**
  * If set to true, disables strict networking enforcement for this destination. When disabled, Vault will not enforce allowed IP addresses and ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_vercel_destination#disable_strict_networking SecretsSyncVercelDestination#disable_strict_networking}
  */
  readonly disableStrictNetworking?: boolean | cdktn.IResolvable;
  /**
  * Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_vercel_destination#granularity SecretsSyncVercelDestination#granularity}
  */
  readonly granularity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_vercel_destination#id SecretsSyncVercelDestination#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique name of the Vercel destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_vercel_destination#name SecretsSyncVercelDestination#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_vercel_destination#namespace SecretsSyncVercelDestination#namespace}
  */
  readonly namespace?: string;
  /**
  * Project ID where to manage environment variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_vercel_destination#project_id SecretsSyncVercelDestination#project_id}
  */
  readonly projectId: string;
  /**
  * Template describing how to generate external secret names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_vercel_destination#secret_name_template SecretsSyncVercelDestination#secret_name_template}
  */
  readonly secretNameTemplate?: string;
  /**
  * Team ID the project belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_vercel_destination#team_id SecretsSyncVercelDestination#team_id}
  */
  readonly teamId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_vercel_destination vault_secrets_sync_vercel_destination}
*/
export class SecretsSyncVercelDestination extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_secrets_sync_vercel_destination";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SecretsSyncVercelDestination resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecretsSyncVercelDestination to import
  * @param importFromId The id of the existing SecretsSyncVercelDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_vercel_destination#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecretsSyncVercelDestination to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_secrets_sync_vercel_destination", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_vercel_destination vault_secrets_sync_vercel_destination} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretsSyncVercelDestinationConfig
  */
  public constructor(scope: Construct, id: string, config: SecretsSyncVercelDestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_secrets_sync_vercel_destination',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.7.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessToken = config.accessToken;
    this._allowedIpv4Addresses = config.allowedIpv4Addresses;
    this._allowedIpv6Addresses = config.allowedIpv6Addresses;
    this._allowedPorts = config.allowedPorts;
    this._deploymentEnvironments = config.deploymentEnvironments;
    this._disableStrictNetworking = config.disableStrictNetworking;
    this._granularity = config.granularity;
    this._id = config.id;
    this._name = config.name;
    this._namespace = config.namespace;
    this._projectId = config.projectId;
    this._secretNameTemplate = config.secretNameTemplate;
    this._teamId = config.teamId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token - computed: false, optional: false, required: true
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // allowed_ipv4_addresses - computed: false, optional: true, required: false
  private _allowedIpv4Addresses?: string[]; 
  public get allowedIpv4Addresses() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_ipv4_addresses'));
  }
  public set allowedIpv4Addresses(value: string[]) {
    this._allowedIpv4Addresses = value;
  }
  public resetAllowedIpv4Addresses() {
    this._allowedIpv4Addresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIpv4AddressesInput() {
    return this._allowedIpv4Addresses;
  }

  // allowed_ipv6_addresses - computed: false, optional: true, required: false
  private _allowedIpv6Addresses?: string[]; 
  public get allowedIpv6Addresses() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_ipv6_addresses'));
  }
  public set allowedIpv6Addresses(value: string[]) {
    this._allowedIpv6Addresses = value;
  }
  public resetAllowedIpv6Addresses() {
    this._allowedIpv6Addresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIpv6AddressesInput() {
    return this._allowedIpv6Addresses;
  }

  // allowed_ports - computed: false, optional: true, required: false
  private _allowedPorts?: number[]; 
  public get allowedPorts() {
    return cdktn.Token.asNumberList(cdktn.Fn.tolist(this.getNumberListAttribute('allowed_ports')));
  }
  public set allowedPorts(value: number[]) {
    this._allowedPorts = value;
  }
  public resetAllowedPorts() {
    this._allowedPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedPortsInput() {
    return this._allowedPorts;
  }

  // deployment_environments - computed: false, optional: false, required: true
  private _deploymentEnvironments?: string[]; 
  public get deploymentEnvironments() {
    return this.getListAttribute('deployment_environments');
  }
  public set deploymentEnvironments(value: string[]) {
    this._deploymentEnvironments = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentEnvironmentsInput() {
    return this._deploymentEnvironments;
  }

  // disable_strict_networking - computed: false, optional: true, required: false
  private _disableStrictNetworking?: boolean | cdktn.IResolvable; 
  public get disableStrictNetworking() {
    return this.getBooleanAttribute('disable_strict_networking');
  }
  public set disableStrictNetworking(value: boolean | cdktn.IResolvable) {
    this._disableStrictNetworking = value;
  }
  public resetDisableStrictNetworking() {
    this._disableStrictNetworking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableStrictNetworkingInput() {
    return this._disableStrictNetworking;
  }

  // granularity - computed: false, optional: true, required: false
  private _granularity?: string; 
  public get granularity() {
    return this.getStringAttribute('granularity');
  }
  public set granularity(value: string) {
    this._granularity = value;
  }
  public resetGranularity() {
    this._granularity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get granularityInput() {
    return this._granularity;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // secret_name_template - computed: true, optional: true, required: false
  private _secretNameTemplate?: string; 
  public get secretNameTemplate() {
    return this.getStringAttribute('secret_name_template');
  }
  public set secretNameTemplate(value: string) {
    this._secretNameTemplate = value;
  }
  public resetSecretNameTemplate() {
    this._secretNameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameTemplateInput() {
    return this._secretNameTemplate;
  }

  // team_id - computed: false, optional: true, required: false
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  public resetTeamId() {
    this._teamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token: cdktn.stringToTerraform(this._accessToken),
      allowed_ipv4_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedIpv4Addresses),
      allowed_ipv6_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedIpv6Addresses),
      allowed_ports: cdktn.listMapper(cdktn.numberToTerraform, false)(this._allowedPorts),
      deployment_environments: cdktn.listMapper(cdktn.stringToTerraform, false)(this._deploymentEnvironments),
      disable_strict_networking: cdktn.booleanToTerraform(this._disableStrictNetworking),
      granularity: cdktn.stringToTerraform(this._granularity),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      namespace: cdktn.stringToTerraform(this._namespace),
      project_id: cdktn.stringToTerraform(this._projectId),
      secret_name_template: cdktn.stringToTerraform(this._secretNameTemplate),
      team_id: cdktn.stringToTerraform(this._teamId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_token: {
        value: cdktn.stringToHclTerraform(this._accessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_ipv4_addresses: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowedIpv4Addresses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allowed_ipv6_addresses: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowedIpv6Addresses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allowed_ports: {
        value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(this._allowedPorts),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      deployment_environments: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._deploymentEnvironments),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      disable_strict_networking: {
        value: cdktn.booleanToHclTerraform(this._disableStrictNetworking),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      granularity: {
        value: cdktn.stringToHclTerraform(this._granularity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktn.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktn.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_name_template: {
        value: cdktn.stringToHclTerraform(this._secretNameTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team_id: {
        value: cdktn.stringToHclTerraform(this._teamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
