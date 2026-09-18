# `pkiExternalCaSecretBackendDnsProviderAzure` Submodule <a name="`pkiExternalCaSecretBackendDnsProviderAzure` Submodule" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiExternalCaSecretBackendDnsProviderAzure <a name="PkiExternalCaSecretBackendDnsProviderAzure" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure vault_pki_external_ca_secret_backend_dns_provider_azure}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/pkiexternalcasecretbackenddnsproviderazure"

pkiexternalcasecretbackenddnsproviderazure.NewPkiExternalCaSecretBackendDnsProviderAzure(scope Construct, id *string, config PkiExternalCaSecretBackendDnsProviderAzureConfig) PkiExternalCaSecretBackendDnsProviderAzure
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig">PkiExternalCaSecretBackendDnsProviderAzureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig">PkiExternalCaSecretBackendDnsProviderAzureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetClientSecretWo">ResetClientSecretWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetClientSecretWoVersion">ResetClientSecretWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetNameserver">ResetNameserver</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetResourceGroupName">ResetResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetSubscriptionId">ResetSubscriptionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetTenantId">ResetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetTtl">ResetTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetZoneName">ResetZoneName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientSecretWo` <a name="ResetClientSecretWo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetClientSecretWo"></a>

```go
func ResetClientSecretWo()
```

##### `ResetClientSecretWoVersion` <a name="ResetClientSecretWoVersion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetClientSecretWoVersion"></a>

```go
func ResetClientSecretWoVersion()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetNameserver` <a name="ResetNameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetNameserver"></a>

```go
func ResetNameserver()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetResourceGroupName` <a name="ResetResourceGroupName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetResourceGroupName"></a>

```go
func ResetResourceGroupName()
```

##### `ResetSubscriptionId` <a name="ResetSubscriptionId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetSubscriptionId"></a>

```go
func ResetSubscriptionId()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetTenantId"></a>

```go
func ResetTenantId()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetTtl"></a>

```go
func ResetTtl()
```

##### `ResetZoneName` <a name="ResetZoneName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetZoneName"></a>

```go
func ResetZoneName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PkiExternalCaSecretBackendDnsProviderAzure resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/pkiexternalcasecretbackenddnsproviderazure"

pkiexternalcasecretbackenddnsproviderazure.PkiExternalCaSecretBackendDnsProviderAzure_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/pkiexternalcasecretbackenddnsproviderazure"

pkiexternalcasecretbackenddnsproviderazure.PkiExternalCaSecretBackendDnsProviderAzure_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/pkiexternalcasecretbackenddnsproviderazure"

pkiexternalcasecretbackenddnsproviderazure.PkiExternalCaSecretBackendDnsProviderAzure_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/pkiexternalcasecretbackenddnsproviderazure"

pkiexternalcasecretbackenddnsproviderazure.PkiExternalCaSecretBackendDnsProviderAzure_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a PkiExternalCaSecretBackendDnsProviderAzure resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PkiExternalCaSecretBackendDnsProviderAzure to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PkiExternalCaSecretBackendDnsProviderAzure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the PkiExternalCaSecretBackendDnsProviderAzure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.creationDate">CreationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.lastUpdatedDate">LastUpdatedDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientSecretWoInput">ClientSecretWoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientSecretWoVersionInput">ClientSecretWoVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.identifiersInput">IdentifiersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.mountInput">MountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.nameserverInput">NameserverInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.ttlInput">TtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.zoneNameInput">ZoneNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientSecretWo">ClientSecretWo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientSecretWoVersion">ClientSecretWoVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.identifiers">Identifiers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.mount">Mount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.nameserver">Nameserver</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.zoneName">ZoneName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.creationDate"></a>

```go
func CreationDate() *string
```

- *Type:* *string

---

##### `LastUpdatedDate`<sup>Required</sup> <a name="LastUpdatedDate" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.lastUpdatedDate"></a>

```go
func LastUpdatedDate() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretWoInput`<sup>Optional</sup> <a name="ClientSecretWoInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientSecretWoInput"></a>

```go
func ClientSecretWoInput() *string
```

- *Type:* *string

---

##### `ClientSecretWoVersionInput`<sup>Optional</sup> <a name="ClientSecretWoVersionInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientSecretWoVersionInput"></a>

```go
func ClientSecretWoVersionInput() *f64
```

- *Type:* *f64

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `IdentifiersInput`<sup>Optional</sup> <a name="IdentifiersInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.identifiersInput"></a>

```go
func IdentifiersInput() *[]*string
```

- *Type:* *[]*string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.mountInput"></a>

```go
func MountInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NameserverInput`<sup>Optional</sup> <a name="NameserverInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.nameserverInput"></a>

```go
func NameserverInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.subscriptionIdInput"></a>

```go
func SubscriptionIdInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.ttlInput"></a>

```go
func TtlInput() *f64
```

- *Type:* *f64

---

##### `ZoneNameInput`<sup>Optional</sup> <a name="ZoneNameInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.zoneNameInput"></a>

```go
func ZoneNameInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### ~~`ClientSecretWo`~~<sup>Required</sup> <a name="ClientSecretWo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientSecretWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```go
func ClientSecretWo() *string
```

- *Type:* *string

---

##### `ClientSecretWoVersion`<sup>Required</sup> <a name="ClientSecretWoVersion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientSecretWoVersion"></a>

```go
func ClientSecretWoVersion() *f64
```

- *Type:* *f64

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `Identifiers`<sup>Required</sup> <a name="Identifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.identifiers"></a>

```go
func Identifiers() *[]*string
```

- *Type:* *[]*string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.mount"></a>

```go
func Mount() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Nameserver`<sup>Required</sup> <a name="Nameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.nameserver"></a>

```go
func Nameserver() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `ZoneName`<sup>Required</sup> <a name="ZoneName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.zoneName"></a>

```go
func ZoneName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiExternalCaSecretBackendDnsProviderAzureConfig <a name="PkiExternalCaSecretBackendDnsProviderAzureConfig" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/pkiexternalcasecretbackenddnsproviderazure"

&pkiexternalcasecretbackenddnsproviderazure.PkiExternalCaSecretBackendDnsProviderAzureConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Identifiers: *[]*string,
	Mount: *string,
	Name: *string,
	ClientId: *string,
	ClientSecretWo: *string,
	ClientSecretWoVersion: *f64,
	Environment: *string,
	Nameserver: *string,
	Namespace: *string,
	ResourceGroupName: *string,
	SubscriptionId: *string,
	TenantId: *string,
	Ttl: *f64,
	ZoneName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.identifiers">Identifiers</a></code> | <code>*[]*string</code> | List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.mount">Mount</a></code> | <code>*string</code> | The path where the PKI External CA secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.name">Name</a></code> | <code>*string</code> | Name of the DNS provider configuration. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.clientId">ClientId</a></code> | <code>*string</code> | Azure service principal client ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.clientSecretWo">ClientSecretWo</a></code> | <code>*string</code> | Azure service principal client secret. Write-only — not returned by Vault. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.clientSecretWoVersion">ClientSecretWoVersion</a></code> | <code>*f64</code> | Version counter for the write-only `client_secret` field. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.environment">Environment</a></code> | <code>*string</code> | Azure cloud environment. Valid values: `AzurePublic`, `AzureChina`, `AzureGovernment`. Defaults to `AzurePublic`. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.nameserver">Nameserver</a></code> | <code>*string</code> | Address of a DNS nameserver (`host` or `host:port`) to use when verifying DNS-01 challenge propagation instead of the domain's primary nameserver. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Resource group containing the DNS zone. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | Azure subscription ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.tenantId">TenantId</a></code> | <code>*string</code> | Azure tenant ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.ttl">Ttl</a></code> | <code>*f64</code> | TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.zoneName">ZoneName</a></code> | <code>*string</code> | Azure DNS zone name. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Identifiers`<sup>Required</sup> <a name="Identifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.identifiers"></a>

```go
Identifiers *[]*string
```

- *Type:* *[]*string

List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#identifiers PkiExternalCaSecretBackendDnsProviderAzure#identifiers}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

The path where the PKI External CA secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#mount PkiExternalCaSecretBackendDnsProviderAzure#mount}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the DNS provider configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#name PkiExternalCaSecretBackendDnsProviderAzure#name}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Azure service principal client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#client_id PkiExternalCaSecretBackendDnsProviderAzure#client_id}

---

##### `ClientSecretWo`<sup>Optional</sup> <a name="ClientSecretWo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.clientSecretWo"></a>

```go
ClientSecretWo *string
```

- *Type:* *string

Azure service principal client secret. Write-only — not returned by Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#client_secret_wo PkiExternalCaSecretBackendDnsProviderAzure#client_secret_wo}

---

##### `ClientSecretWoVersion`<sup>Optional</sup> <a name="ClientSecretWoVersion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.clientSecretWoVersion"></a>

```go
ClientSecretWoVersion *f64
```

- *Type:* *f64

Version counter for the write-only `client_secret` field.

Increment this value to trigger an update to the client secret in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#client_secret_wo_version PkiExternalCaSecretBackendDnsProviderAzure#client_secret_wo_version}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

Azure cloud environment. Valid values: `AzurePublic`, `AzureChina`, `AzureGovernment`. Defaults to `AzurePublic`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#environment PkiExternalCaSecretBackendDnsProviderAzure#environment}

---

##### `Nameserver`<sup>Optional</sup> <a name="Nameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.nameserver"></a>

```go
Nameserver *string
```

- *Type:* *string

Address of a DNS nameserver (`host` or `host:port`) to use when verifying DNS-01 challenge propagation instead of the domain's primary nameserver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#nameserver PkiExternalCaSecretBackendDnsProviderAzure#nameserver}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#namespace PkiExternalCaSecretBackendDnsProviderAzure#namespace}

---

##### `ResourceGroupName`<sup>Optional</sup> <a name="ResourceGroupName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Resource group containing the DNS zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#resource_group_name PkiExternalCaSecretBackendDnsProviderAzure#resource_group_name}

---

##### `SubscriptionId`<sup>Optional</sup> <a name="SubscriptionId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.subscriptionId"></a>

```go
SubscriptionId *string
```

- *Type:* *string

Azure subscription ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#subscription_id PkiExternalCaSecretBackendDnsProviderAzure#subscription_id}

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

Azure tenant ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#tenant_id PkiExternalCaSecretBackendDnsProviderAzure#tenant_id}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.ttl"></a>

```go
Ttl *f64
```

- *Type:* *f64

TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#ttl PkiExternalCaSecretBackendDnsProviderAzure#ttl}

---

##### `ZoneName`<sup>Optional</sup> <a name="ZoneName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.zoneName"></a>

```go
ZoneName *string
```

- *Type:* *string

Azure DNS zone name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#zone_name PkiExternalCaSecretBackendDnsProviderAzure#zone_name}

---



