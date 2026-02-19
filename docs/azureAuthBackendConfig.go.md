# `azureAuthBackendConfig` Submodule <a name="`azureAuthBackendConfig` Submodule" id="@cdktn/provider-vault.azureAuthBackendConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzureAuthBackendConfig <a name="AzureAuthBackendConfig" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/azure_auth_backend_config vault_azure_auth_backend_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/azureauthbackendconfig"

azureauthbackendconfig.NewAzureAuthBackendConfig(scope Construct, id *string, config AzureAuthBackendConfigConfig) AzureAuthBackendConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig">AzureAuthBackendConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig">AzureAuthBackendConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetClientSecretWo">ResetClientSecretWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetClientSecretWoVersion">ResetClientSecretWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetDisableAutomatedRotation">ResetDisableAutomatedRotation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetIdentityTokenAudience">ResetIdentityTokenAudience</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetIdentityTokenTtl">ResetIdentityTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetMaxRetries">ResetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetMaxRetryDelay">ResetMaxRetryDelay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetRetryDelay">ResetRetryDelay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetRotationPeriod">ResetRotationPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetRotationSchedule">ResetRotationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetRotationWindow">ResetRotationWindow</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBackend` <a name="ResetBackend" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetBackend"></a>

```go
func ResetBackend()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetClientSecretWo` <a name="ResetClientSecretWo" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetClientSecretWo"></a>

```go
func ResetClientSecretWo()
```

##### `ResetClientSecretWoVersion` <a name="ResetClientSecretWoVersion" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetClientSecretWoVersion"></a>

```go
func ResetClientSecretWoVersion()
```

##### `ResetDisableAutomatedRotation` <a name="ResetDisableAutomatedRotation" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetDisableAutomatedRotation"></a>

```go
func ResetDisableAutomatedRotation()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentityTokenAudience` <a name="ResetIdentityTokenAudience" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetIdentityTokenAudience"></a>

```go
func ResetIdentityTokenAudience()
```

##### `ResetIdentityTokenTtl` <a name="ResetIdentityTokenTtl" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetIdentityTokenTtl"></a>

```go
func ResetIdentityTokenTtl()
```

##### `ResetMaxRetries` <a name="ResetMaxRetries" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetMaxRetries"></a>

```go
func ResetMaxRetries()
```

##### `ResetMaxRetryDelay` <a name="ResetMaxRetryDelay" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetMaxRetryDelay"></a>

```go
func ResetMaxRetryDelay()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetRetryDelay` <a name="ResetRetryDelay" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetRetryDelay"></a>

```go
func ResetRetryDelay()
```

##### `ResetRotationPeriod` <a name="ResetRotationPeriod" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetRotationPeriod"></a>

```go
func ResetRotationPeriod()
```

##### `ResetRotationSchedule` <a name="ResetRotationSchedule" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetRotationSchedule"></a>

```go
func ResetRotationSchedule()
```

##### `ResetRotationWindow` <a name="ResetRotationWindow" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.resetRotationWindow"></a>

```go
func ResetRotationWindow()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AzureAuthBackendConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/azureauthbackendconfig"

azureauthbackendconfig.AzureAuthBackendConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/azureauthbackendconfig"

azureauthbackendconfig.AzureAuthBackendConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/azureauthbackendconfig"

azureauthbackendconfig.AzureAuthBackendConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/azureauthbackendconfig"

azureauthbackendconfig.AzureAuthBackendConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AzureAuthBackendConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AzureAuthBackendConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AzureAuthBackendConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/azure_auth_backend_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AzureAuthBackendConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.clientSecretWoInput">ClientSecretWoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.clientSecretWoVersionInput">ClientSecretWoVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.disableAutomatedRotationInput">DisableAutomatedRotationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.identityTokenAudienceInput">IdentityTokenAudienceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.identityTokenTtlInput">IdentityTokenTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.maxRetryDelayInput">MaxRetryDelayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.resourceInput">ResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.retryDelayInput">RetryDelayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.rotationPeriodInput">RotationPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.rotationScheduleInput">RotationScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.rotationWindowInput">RotationWindowInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.clientSecretWo">ClientSecretWo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.clientSecretWoVersion">ClientSecretWoVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.disableAutomatedRotation">DisableAutomatedRotation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.identityTokenAudience">IdentityTokenAudience</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.identityTokenTtl">IdentityTokenTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.maxRetries">MaxRetries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.maxRetryDelay">MaxRetryDelay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.resource">Resource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.retryDelay">RetryDelay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.rotationPeriod">RotationPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.rotationSchedule">RotationSchedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.rotationWindow">RotationWindow</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `ClientSecretWoInput`<sup>Optional</sup> <a name="ClientSecretWoInput" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.clientSecretWoInput"></a>

```go
func ClientSecretWoInput() *string
```

- *Type:* *string

---

##### `ClientSecretWoVersionInput`<sup>Optional</sup> <a name="ClientSecretWoVersionInput" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.clientSecretWoVersionInput"></a>

```go
func ClientSecretWoVersionInput() *f64
```

- *Type:* *f64

---

##### `DisableAutomatedRotationInput`<sup>Optional</sup> <a name="DisableAutomatedRotationInput" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.disableAutomatedRotationInput"></a>

```go
func DisableAutomatedRotationInput() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `IdentityTokenAudienceInput`<sup>Optional</sup> <a name="IdentityTokenAudienceInput" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.identityTokenAudienceInput"></a>

```go
func IdentityTokenAudienceInput() *string
```

- *Type:* *string

---

##### `IdentityTokenTtlInput`<sup>Optional</sup> <a name="IdentityTokenTtlInput" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.identityTokenTtlInput"></a>

```go
func IdentityTokenTtlInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.maxRetriesInput"></a>

```go
func MaxRetriesInput() *f64
```

- *Type:* *f64

---

##### `MaxRetryDelayInput`<sup>Optional</sup> <a name="MaxRetryDelayInput" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.maxRetryDelayInput"></a>

```go
func MaxRetryDelayInput() *f64
```

- *Type:* *f64

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.resourceInput"></a>

```go
func ResourceInput() *string
```

- *Type:* *string

---

##### `RetryDelayInput`<sup>Optional</sup> <a name="RetryDelayInput" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.retryDelayInput"></a>

```go
func RetryDelayInput() *f64
```

- *Type:* *f64

---

##### `RotationPeriodInput`<sup>Optional</sup> <a name="RotationPeriodInput" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.rotationPeriodInput"></a>

```go
func RotationPeriodInput() *f64
```

- *Type:* *f64

---

##### `RotationScheduleInput`<sup>Optional</sup> <a name="RotationScheduleInput" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.rotationScheduleInput"></a>

```go
func RotationScheduleInput() *string
```

- *Type:* *string

---

##### `RotationWindowInput`<sup>Optional</sup> <a name="RotationWindowInput" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.rotationWindowInput"></a>

```go
func RotationWindowInput() *f64
```

- *Type:* *f64

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `ClientSecretWo`<sup>Required</sup> <a name="ClientSecretWo" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.clientSecretWo"></a>

```go
func ClientSecretWo() *string
```

- *Type:* *string

---

##### `ClientSecretWoVersion`<sup>Required</sup> <a name="ClientSecretWoVersion" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.clientSecretWoVersion"></a>

```go
func ClientSecretWoVersion() *f64
```

- *Type:* *f64

---

##### `DisableAutomatedRotation`<sup>Required</sup> <a name="DisableAutomatedRotation" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.disableAutomatedRotation"></a>

```go
func DisableAutomatedRotation() interface{}
```

- *Type:* interface{}

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdentityTokenAudience`<sup>Required</sup> <a name="IdentityTokenAudience" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.identityTokenAudience"></a>

```go
func IdentityTokenAudience() *string
```

- *Type:* *string

---

##### `IdentityTokenTtl`<sup>Required</sup> <a name="IdentityTokenTtl" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.identityTokenTtl"></a>

```go
func IdentityTokenTtl() *f64
```

- *Type:* *f64

---

##### `MaxRetries`<sup>Required</sup> <a name="MaxRetries" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.maxRetries"></a>

```go
func MaxRetries() *f64
```

- *Type:* *f64

---

##### `MaxRetryDelay`<sup>Required</sup> <a name="MaxRetryDelay" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.maxRetryDelay"></a>

```go
func MaxRetryDelay() *f64
```

- *Type:* *f64

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.resource"></a>

```go
func Resource() *string
```

- *Type:* *string

---

##### `RetryDelay`<sup>Required</sup> <a name="RetryDelay" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.retryDelay"></a>

```go
func RetryDelay() *f64
```

- *Type:* *f64

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.rotationPeriod"></a>

```go
func RotationPeriod() *f64
```

- *Type:* *f64

---

##### `RotationSchedule`<sup>Required</sup> <a name="RotationSchedule" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.rotationSchedule"></a>

```go
func RotationSchedule() *string
```

- *Type:* *string

---

##### `RotationWindow`<sup>Required</sup> <a name="RotationWindow" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.rotationWindow"></a>

```go
func RotationWindow() *f64
```

- *Type:* *f64

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AzureAuthBackendConfigConfig <a name="AzureAuthBackendConfigConfig" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/azureauthbackendconfig"

&azureauthbackendconfig.AzureAuthBackendConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Resource: *string,
	TenantId: *string,
	Backend: *string,
	ClientId: *string,
	ClientSecret: *string,
	ClientSecretWo: *string,
	ClientSecretWoVersion: *f64,
	DisableAutomatedRotation: interface{},
	Environment: *string,
	Id: *string,
	IdentityTokenAudience: *string,
	IdentityTokenTtl: *f64,
	MaxRetries: *f64,
	MaxRetryDelay: *f64,
	Namespace: *string,
	RetryDelay: *f64,
	RotationPeriod: *f64,
	RotationSchedule: *string,
	RotationWindow: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.resource">Resource</a></code> | <code>*string</code> | The configured URL for the application registered in Azure Active Directory. |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.tenantId">TenantId</a></code> | <code>*string</code> | The tenant id for the Azure Active Directory organization. |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.backend">Backend</a></code> | <code>*string</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.clientId">ClientId</a></code> | <code>*string</code> | The client id for credentials to query the Azure APIs. Currently read permissions to query compute resources are required. |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | The client secret for credentials to query the Azure APIs. Mutually exclusive with 'client_secret_wo'. |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.clientSecretWo">ClientSecretWo</a></code> | <code>*string</code> | The client secret for credentials to query the Azure APIs. |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.clientSecretWoVersion">ClientSecretWoVersion</a></code> | <code>*f64</code> | Version counter for the write-only client secret. |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.disableAutomatedRotation">DisableAutomatedRotation</a></code> | <code>interface{}</code> | Stops rotation of the root credential until set to false. |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.environment">Environment</a></code> | <code>*string</code> | The Azure cloud environment. Valid values: AzurePublicCloud, AzureUSGovernmentCloud, AzureChinaCloud, AzureGermanCloud. |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/azure_auth_backend_config#id AzureAuthBackendConfig#id}. |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.identityTokenAudience">IdentityTokenAudience</a></code> | <code>*string</code> | The audience claim value. |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.identityTokenTtl">IdentityTokenTtl</a></code> | <code>*f64</code> | The TTL of generated identity tokens in seconds. |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.maxRetries">MaxRetries</a></code> | <code>*f64</code> | Maximum number of retries for Azure API requests. Defaults to 3. |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.maxRetryDelay">MaxRetryDelay</a></code> | <code>*f64</code> | The maximum delay in seconds between retries for Azure API requests. Defaults to 60. |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.retryDelay">RetryDelay</a></code> | <code>*f64</code> | The initial delay in seconds between retries for Azure API requests. Defaults to 4. |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.rotationPeriod">RotationPeriod</a></code> | <code>*f64</code> | The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule. |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.rotationSchedule">RotationSchedule</a></code> | <code>*string</code> | The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period. |
| <code><a href="#@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.rotationWindow">RotationWindow</a></code> | <code>*f64</code> | The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.resource"></a>

```go
Resource *string
```

- *Type:* *string

The configured URL for the application registered in Azure Active Directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/azure_auth_backend_config#resource AzureAuthBackendConfig#resource}

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

The tenant id for the Azure Active Directory organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/azure_auth_backend_config#tenant_id AzureAuthBackendConfig#tenant_id}

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/azure_auth_backend_config#backend AzureAuthBackendConfig#backend}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The client id for credentials to query the Azure APIs. Currently read permissions to query compute resources are required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/azure_auth_backend_config#client_id AzureAuthBackendConfig#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

The client secret for credentials to query the Azure APIs. Mutually exclusive with 'client_secret_wo'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/azure_auth_backend_config#client_secret AzureAuthBackendConfig#client_secret}

---

##### `ClientSecretWo`<sup>Optional</sup> <a name="ClientSecretWo" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.clientSecretWo"></a>

```go
ClientSecretWo *string
```

- *Type:* *string

The client secret for credentials to query the Azure APIs.

This field is write-only and will never be stored in state. Mutually exclusive with 'client_secret'. Requires 'client_secret_wo_version' to trigger updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/azure_auth_backend_config#client_secret_wo AzureAuthBackendConfig#client_secret_wo}

---

##### `ClientSecretWoVersion`<sup>Optional</sup> <a name="ClientSecretWoVersion" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.clientSecretWoVersion"></a>

```go
ClientSecretWoVersion *f64
```

- *Type:* *f64

Version counter for the write-only client secret.

Increment this value to trigger rotation of the client secret. Required when using 'client_secret_wo'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/azure_auth_backend_config#client_secret_wo_version AzureAuthBackendConfig#client_secret_wo_version}

---

##### `DisableAutomatedRotation`<sup>Optional</sup> <a name="DisableAutomatedRotation" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.disableAutomatedRotation"></a>

```go
DisableAutomatedRotation interface{}
```

- *Type:* interface{}

Stops rotation of the root credential until set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/azure_auth_backend_config#disable_automated_rotation AzureAuthBackendConfig#disable_automated_rotation}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

The Azure cloud environment. Valid values: AzurePublicCloud, AzureUSGovernmentCloud, AzureChinaCloud, AzureGermanCloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/azure_auth_backend_config#environment AzureAuthBackendConfig#environment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/azure_auth_backend_config#id AzureAuthBackendConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityTokenAudience`<sup>Optional</sup> <a name="IdentityTokenAudience" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.identityTokenAudience"></a>

```go
IdentityTokenAudience *string
```

- *Type:* *string

The audience claim value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/azure_auth_backend_config#identity_token_audience AzureAuthBackendConfig#identity_token_audience}

---

##### `IdentityTokenTtl`<sup>Optional</sup> <a name="IdentityTokenTtl" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.identityTokenTtl"></a>

```go
IdentityTokenTtl *f64
```

- *Type:* *f64

The TTL of generated identity tokens in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/azure_auth_backend_config#identity_token_ttl AzureAuthBackendConfig#identity_token_ttl}

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.maxRetries"></a>

```go
MaxRetries *f64
```

- *Type:* *f64

Maximum number of retries for Azure API requests. Defaults to 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/azure_auth_backend_config#max_retries AzureAuthBackendConfig#max_retries}

---

##### `MaxRetryDelay`<sup>Optional</sup> <a name="MaxRetryDelay" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.maxRetryDelay"></a>

```go
MaxRetryDelay *f64
```

- *Type:* *f64

The maximum delay in seconds between retries for Azure API requests. Defaults to 60.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/azure_auth_backend_config#max_retry_delay AzureAuthBackendConfig#max_retry_delay}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/azure_auth_backend_config#namespace AzureAuthBackendConfig#namespace}

---

##### `RetryDelay`<sup>Optional</sup> <a name="RetryDelay" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.retryDelay"></a>

```go
RetryDelay *f64
```

- *Type:* *f64

The initial delay in seconds between retries for Azure API requests. Defaults to 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/azure_auth_backend_config#retry_delay AzureAuthBackendConfig#retry_delay}

---

##### `RotationPeriod`<sup>Optional</sup> <a name="RotationPeriod" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.rotationPeriod"></a>

```go
RotationPeriod *f64
```

- *Type:* *f64

The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/azure_auth_backend_config#rotation_period AzureAuthBackendConfig#rotation_period}

---

##### `RotationSchedule`<sup>Optional</sup> <a name="RotationSchedule" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.rotationSchedule"></a>

```go
RotationSchedule *string
```

- *Type:* *string

The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/azure_auth_backend_config#rotation_schedule AzureAuthBackendConfig#rotation_schedule}

---

##### `RotationWindow`<sup>Optional</sup> <a name="RotationWindow" id="@cdktn/provider-vault.azureAuthBackendConfig.AzureAuthBackendConfigConfig.property.rotationWindow"></a>

```go
RotationWindow *f64
```

- *Type:* *f64

The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered.

Can only be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/azure_auth_backend_config#rotation_window AzureAuthBackendConfig#rotation_window}

---



