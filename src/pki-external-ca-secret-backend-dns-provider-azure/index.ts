/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface PkiExternalCaSecretBackendDnsProviderAzureConfig extends cdktn.TerraformMetaArguments {
  /**
  * Azure service principal client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#client_id PkiExternalCaSecretBackendDnsProviderAzure#client_id}
  */
  readonly clientId?: string;
  /**
  * Azure service principal client secret. Write-only — not returned by Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#client_secret_wo PkiExternalCaSecretBackendDnsProviderAzure#client_secret_wo}
  */
  readonly clientSecretWo?: string;
  /**
  * Version counter for the write-only `client_secret` field. Increment this value to trigger an update to the client secret in Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#client_secret_wo_version PkiExternalCaSecretBackendDnsProviderAzure#client_secret_wo_version}
  */
  readonly clientSecretWoVersion?: number;
  /**
  * Azure cloud environment. Valid values: `AzurePublic`, `AzureChina`, `AzureGovernment`. Defaults to `AzurePublic`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#environment PkiExternalCaSecretBackendDnsProviderAzure#environment}
  */
  readonly environment?: string;
  /**
  * List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#identifiers PkiExternalCaSecretBackendDnsProviderAzure#identifiers}
  */
  readonly identifiers: string[];
  /**
  * The path where the PKI External CA secret backend is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#mount PkiExternalCaSecretBackendDnsProviderAzure#mount}
  */
  readonly mount: string;
  /**
  * Name of the DNS provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#name PkiExternalCaSecretBackendDnsProviderAzure#name}
  */
  readonly name: string;
  /**
  * Address of a DNS nameserver (`host` or `host:port`) to use when verifying DNS-01 challenge propagation instead of the domain's primary nameserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#nameserver PkiExternalCaSecretBackendDnsProviderAzure#nameserver}
  */
  readonly nameserver?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#namespace PkiExternalCaSecretBackendDnsProviderAzure#namespace}
  */
  readonly namespace?: string;
  /**
  * Resource group containing the DNS zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#resource_group_name PkiExternalCaSecretBackendDnsProviderAzure#resource_group_name}
  */
  readonly resourceGroupName?: string;
  /**
  * Azure subscription ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#subscription_id PkiExternalCaSecretBackendDnsProviderAzure#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * Azure tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#tenant_id PkiExternalCaSecretBackendDnsProviderAzure#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#ttl PkiExternalCaSecretBackendDnsProviderAzure#ttl}
  */
  readonly ttl?: number;
  /**
  * Azure DNS zone name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#zone_name PkiExternalCaSecretBackendDnsProviderAzure#zone_name}
  */
  readonly zoneName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure vault_pki_external_ca_secret_backend_dns_provider_azure}
*/
export class PkiExternalCaSecretBackendDnsProviderAzure extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_pki_external_ca_secret_backend_dns_provider_azure";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a PkiExternalCaSecretBackendDnsProviderAzure resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PkiExternalCaSecretBackendDnsProviderAzure to import
  * @param importFromId The id of the existing PkiExternalCaSecretBackendDnsProviderAzure that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PkiExternalCaSecretBackendDnsProviderAzure to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_pki_external_ca_secret_backend_dns_provider_azure", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure vault_pki_external_ca_secret_backend_dns_provider_azure} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PkiExternalCaSecretBackendDnsProviderAzureConfig
  */
  public constructor(scope: Construct, id: string, config: PkiExternalCaSecretBackendDnsProviderAzureConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_pki_external_ca_secret_backend_dns_provider_azure',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.12.0',
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
    this._clientId = config.clientId;
    this._clientSecretWo = config.clientSecretWo;
    this._clientSecretWoVersion = config.clientSecretWoVersion;
    this._environment = config.environment;
    this._identifiers = config.identifiers;
    this._mount = config.mount;
    this._name = config.name;
    this._nameserver = config.nameserver;
    this._namespace = config.namespace;
    this._resourceGroupName = config.resourceGroupName;
    this._subscriptionId = config.subscriptionId;
    this._tenantId = config.tenantId;
    this._ttl = config.ttl;
    this._zoneName = config.zoneName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret_wo - computed: false, optional: true, required: false
  private _clientSecretWo?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get clientSecretWo() {
    return this.getStringAttribute('client_secret_wo');
  }
  public set clientSecretWo(value: string) {
    this._clientSecretWo = value;
  }
  public resetClientSecretWo() {
    this._clientSecretWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretWoInput() {
    return this._clientSecretWo;
  }

  // client_secret_wo_version - computed: false, optional: true, required: false
  private _clientSecretWoVersion?: number; 
  public get clientSecretWoVersion() {
    return this.getNumberAttribute('client_secret_wo_version');
  }
  public set clientSecretWoVersion(value: number) {
    this._clientSecretWoVersion = value;
  }
  public resetClientSecretWoVersion() {
    this._clientSecretWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretWoVersionInput() {
    return this._clientSecretWoVersion;
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // identifiers - computed: false, optional: false, required: true
  private _identifiers?: string[]; 
  public get identifiers() {
    return this.getListAttribute('identifiers');
  }
  public set identifiers(value: string[]) {
    this._identifiers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifiersInput() {
    return this._identifiers;
  }

  // last_updated_date - computed: true, optional: false, required: false
  public get lastUpdatedDate() {
    return this.getStringAttribute('last_updated_date');
  }

  // mount - computed: false, optional: false, required: true
  private _mount?: string; 
  public get mount() {
    return this.getStringAttribute('mount');
  }
  public set mount(value: string) {
    this._mount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountInput() {
    return this._mount;
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

  // nameserver - computed: false, optional: true, required: false
  private _nameserver?: string; 
  public get nameserver() {
    return this.getStringAttribute('nameserver');
  }
  public set nameserver(value: string) {
    this._nameserver = value;
  }
  public resetNameserver() {
    this._nameserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserverInput() {
    return this._nameserver;
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

  // resource_group_name - computed: false, optional: true, required: false
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  public resetResourceGroupName() {
    this._resourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // subscription_id - computed: false, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // zone_name - computed: false, optional: true, required: false
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  public resetZoneName() {
    this._zoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: cdktn.stringToTerraform(this._clientId),
      client_secret_wo: this.markWriteOnlyAttribute(cdktn.stringToTerraform(this._clientSecretWo)),
      client_secret_wo_version: cdktn.numberToTerraform(this._clientSecretWoVersion),
      environment: cdktn.stringToTerraform(this._environment),
      identifiers: cdktn.listMapper(cdktn.stringToTerraform, false)(this._identifiers),
      mount: cdktn.stringToTerraform(this._mount),
      name: cdktn.stringToTerraform(this._name),
      nameserver: cdktn.stringToTerraform(this._nameserver),
      namespace: cdktn.stringToTerraform(this._namespace),
      resource_group_name: cdktn.stringToTerraform(this._resourceGroupName),
      subscription_id: cdktn.stringToTerraform(this._subscriptionId),
      tenant_id: cdktn.stringToTerraform(this._tenantId),
      ttl: cdktn.numberToTerraform(this._ttl),
      zone_name: cdktn.stringToTerraform(this._zoneName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_id: {
        value: cdktn.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret_wo: {
        value: this.markWriteOnlyAttribute(cdktn.stringToHclTerraform(this._clientSecretWo)),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret_wo_version: {
        value: cdktn.numberToHclTerraform(this._clientSecretWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      environment: {
        value: cdktn.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identifiers: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._identifiers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      mount: {
        value: cdktn.stringToHclTerraform(this._mount),
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
      nameserver: {
        value: cdktn.stringToHclTerraform(this._nameserver),
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
      resource_group_name: {
        value: cdktn.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_id: {
        value: cdktn.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktn.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktn.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zone_name: {
        value: cdktn.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
