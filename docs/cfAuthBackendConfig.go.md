# `cfAuthBackendConfig` Submodule <a name="`cfAuthBackendConfig` Submodule" id="@cdktn/provider-vault.cfAuthBackendConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CfAuthBackendConfig <a name="CfAuthBackendConfig" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config vault_cf_auth_backend_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/cfauthbackendconfig"

cfauthbackendconfig.NewCfAuthBackendConfig(scope Construct, id *string, config CfAuthBackendConfigConfig) CfAuthBackendConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig">CfAuthBackendConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig">CfAuthBackendConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetCfApiTrustedCertificates">ResetCfApiTrustedCertificates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetCfTimeout">ResetCfTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetLoginMaxSecondsNotAfter">ResetLoginMaxSecondsNotAfter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetLoginMaxSecondsNotBefore">ResetLoginMaxSecondsNotBefore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCfApiTrustedCertificates` <a name="ResetCfApiTrustedCertificates" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetCfApiTrustedCertificates"></a>

```go
func ResetCfApiTrustedCertificates()
```

##### `ResetCfTimeout` <a name="ResetCfTimeout" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetCfTimeout"></a>

```go
func ResetCfTimeout()
```

##### `ResetLoginMaxSecondsNotAfter` <a name="ResetLoginMaxSecondsNotAfter" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetLoginMaxSecondsNotAfter"></a>

```go
func ResetLoginMaxSecondsNotAfter()
```

##### `ResetLoginMaxSecondsNotBefore` <a name="ResetLoginMaxSecondsNotBefore" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetLoginMaxSecondsNotBefore"></a>

```go
func ResetLoginMaxSecondsNotBefore()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.resetNamespace"></a>

```go
func ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CfAuthBackendConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/cfauthbackendconfig"

cfauthbackendconfig.CfAuthBackendConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/cfauthbackendconfig"

cfauthbackendconfig.CfAuthBackendConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/cfauthbackendconfig"

cfauthbackendconfig.CfAuthBackendConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/cfauthbackendconfig"

cfauthbackendconfig.CfAuthBackendConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CfAuthBackendConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CfAuthBackendConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CfAuthBackendConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CfAuthBackendConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfApiAddrInput">CfApiAddrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfApiTrustedCertificatesInput">CfApiTrustedCertificatesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfPasswordWoInput">CfPasswordWoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfTimeoutInput">CfTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfUsernameInput">CfUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.identityCaCertificatesInput">IdentityCaCertificatesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.loginMaxSecondsNotAfterInput">LoginMaxSecondsNotAfterInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.loginMaxSecondsNotBeforeInput">LoginMaxSecondsNotBeforeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.mountInput">MountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfApiAddr">CfApiAddr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfApiTrustedCertificates">CfApiTrustedCertificates</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfPasswordWo">CfPasswordWo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfTimeout">CfTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfUsername">CfUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.identityCaCertificates">IdentityCaCertificates</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.loginMaxSecondsNotAfter">LoginMaxSecondsNotAfter</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.loginMaxSecondsNotBefore">LoginMaxSecondsNotBefore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.mount">Mount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CfApiAddrInput`<sup>Optional</sup> <a name="CfApiAddrInput" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfApiAddrInput"></a>

```go
func CfApiAddrInput() *string
```

- *Type:* *string

---

##### `CfApiTrustedCertificatesInput`<sup>Optional</sup> <a name="CfApiTrustedCertificatesInput" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfApiTrustedCertificatesInput"></a>

```go
func CfApiTrustedCertificatesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CfPasswordWoInput`<sup>Optional</sup> <a name="CfPasswordWoInput" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfPasswordWoInput"></a>

```go
func CfPasswordWoInput() *string
```

- *Type:* *string

---

##### `CfTimeoutInput`<sup>Optional</sup> <a name="CfTimeoutInput" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfTimeoutInput"></a>

```go
func CfTimeoutInput() *f64
```

- *Type:* *f64

---

##### `CfUsernameInput`<sup>Optional</sup> <a name="CfUsernameInput" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfUsernameInput"></a>

```go
func CfUsernameInput() *string
```

- *Type:* *string

---

##### `IdentityCaCertificatesInput`<sup>Optional</sup> <a name="IdentityCaCertificatesInput" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.identityCaCertificatesInput"></a>

```go
func IdentityCaCertificatesInput() *[]*string
```

- *Type:* *[]*string

---

##### `LoginMaxSecondsNotAfterInput`<sup>Optional</sup> <a name="LoginMaxSecondsNotAfterInput" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.loginMaxSecondsNotAfterInput"></a>

```go
func LoginMaxSecondsNotAfterInput() *f64
```

- *Type:* *f64

---

##### `LoginMaxSecondsNotBeforeInput`<sup>Optional</sup> <a name="LoginMaxSecondsNotBeforeInput" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.loginMaxSecondsNotBeforeInput"></a>

```go
func LoginMaxSecondsNotBeforeInput() *f64
```

- *Type:* *f64

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.mountInput"></a>

```go
func MountInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `CfApiAddr`<sup>Required</sup> <a name="CfApiAddr" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfApiAddr"></a>

```go
func CfApiAddr() *string
```

- *Type:* *string

---

##### `CfApiTrustedCertificates`<sup>Required</sup> <a name="CfApiTrustedCertificates" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfApiTrustedCertificates"></a>

```go
func CfApiTrustedCertificates() *[]*string
```

- *Type:* *[]*string

---

##### `CfPasswordWo`<sup>Required</sup> <a name="CfPasswordWo" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfPasswordWo"></a>

```go
func CfPasswordWo() *string
```

- *Type:* *string

---

##### `CfTimeout`<sup>Required</sup> <a name="CfTimeout" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfTimeout"></a>

```go
func CfTimeout() *f64
```

- *Type:* *f64

---

##### `CfUsername`<sup>Required</sup> <a name="CfUsername" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.cfUsername"></a>

```go
func CfUsername() *string
```

- *Type:* *string

---

##### `IdentityCaCertificates`<sup>Required</sup> <a name="IdentityCaCertificates" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.identityCaCertificates"></a>

```go
func IdentityCaCertificates() *[]*string
```

- *Type:* *[]*string

---

##### `LoginMaxSecondsNotAfter`<sup>Required</sup> <a name="LoginMaxSecondsNotAfter" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.loginMaxSecondsNotAfter"></a>

```go
func LoginMaxSecondsNotAfter() *f64
```

- *Type:* *f64

---

##### `LoginMaxSecondsNotBefore`<sup>Required</sup> <a name="LoginMaxSecondsNotBefore" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.loginMaxSecondsNotBefore"></a>

```go
func LoginMaxSecondsNotBefore() *f64
```

- *Type:* *f64

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.mount"></a>

```go
func Mount() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CfAuthBackendConfigConfig <a name="CfAuthBackendConfigConfig" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/cfauthbackendconfig"

&cfauthbackendconfig.CfAuthBackendConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CfApiAddr: *string,
	CfPasswordWo: *string,
	CfUsername: *string,
	IdentityCaCertificates: *[]*string,
	Mount: *string,
	CfApiTrustedCertificates: *[]*string,
	CfTimeout: *f64,
	LoginMaxSecondsNotAfter: *f64,
	LoginMaxSecondsNotBefore: *f64,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfApiAddr">CfApiAddr</a></code> | <code>*string</code> | CF's full API address, used for verifying that a given `CF_INSTANCE_CERT` shows an application ID, space ID, and organization ID that presently exist. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfPasswordWo">CfPasswordWo</a></code> | <code>*string</code> | The password for authenticating to the CF API. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfUsername">CfUsername</a></code> | <code>*string</code> | The username for authenticating to the CF API. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.identityCaCertificates">IdentityCaCertificates</a></code> | <code>*[]*string</code> | The root CA certificate(s) to be used for verifying that the `CF_INSTANCE_CERT` presented for logging in was issued by the proper authority. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.mount">Mount</a></code> | <code>*string</code> | Mount path for the CF auth engine in Vault. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfApiTrustedCertificates">CfApiTrustedCertificates</a></code> | <code>*[]*string</code> | The certificate(s) presented by the CF API. Configures Vault to trust these certificates when making API calls. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfTimeout">CfTimeout</a></code> | <code>*f64</code> | The timeout for the CF API in seconds. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.loginMaxSecondsNotAfter">LoginMaxSecondsNotAfter</a></code> | <code>*f64</code> | The maximum number of seconds in the future when a signature could have been created. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.loginMaxSecondsNotBefore">LoginMaxSecondsNotBefore</a></code> | <code>*f64</code> | The maximum number of seconds in the past when a signature could have been created. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CfApiAddr`<sup>Required</sup> <a name="CfApiAddr" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfApiAddr"></a>

```go
CfApiAddr *string
```

- *Type:* *string

CF's full API address, used for verifying that a given `CF_INSTANCE_CERT` shows an application ID, space ID, and organization ID that presently exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#cf_api_addr CfAuthBackendConfig#cf_api_addr}

---

##### `CfPasswordWo`<sup>Required</sup> <a name="CfPasswordWo" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfPasswordWo"></a>

```go
CfPasswordWo *string
```

- *Type:* *string

The password for authenticating to the CF API.

This is a write-only field and will not be read back from Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#cf_password_wo CfAuthBackendConfig#cf_password_wo}

---

##### `CfUsername`<sup>Required</sup> <a name="CfUsername" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfUsername"></a>

```go
CfUsername *string
```

- *Type:* *string

The username for authenticating to the CF API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#cf_username CfAuthBackendConfig#cf_username}

---

##### `IdentityCaCertificates`<sup>Required</sup> <a name="IdentityCaCertificates" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.identityCaCertificates"></a>

```go
IdentityCaCertificates *[]*string
```

- *Type:* *[]*string

The root CA certificate(s) to be used for verifying that the `CF_INSTANCE_CERT` presented for logging in was issued by the proper authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#identity_ca_certificates CfAuthBackendConfig#identity_ca_certificates}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

Mount path for the CF auth engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#mount CfAuthBackendConfig#mount}

---

##### `CfApiTrustedCertificates`<sup>Optional</sup> <a name="CfApiTrustedCertificates" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfApiTrustedCertificates"></a>

```go
CfApiTrustedCertificates *[]*string
```

- *Type:* *[]*string

The certificate(s) presented by the CF API. Configures Vault to trust these certificates when making API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#cf_api_trusted_certificates CfAuthBackendConfig#cf_api_trusted_certificates}

---

##### `CfTimeout`<sup>Optional</sup> <a name="CfTimeout" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.cfTimeout"></a>

```go
CfTimeout *f64
```

- *Type:* *f64

The timeout for the CF API in seconds.

Defaults to `0` (no timeout). Removing this field from config resets the value to `0` in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#cf_timeout CfAuthBackendConfig#cf_timeout}

---

##### `LoginMaxSecondsNotAfter`<sup>Optional</sup> <a name="LoginMaxSecondsNotAfter" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.loginMaxSecondsNotAfter"></a>

```go
LoginMaxSecondsNotAfter *f64
```

- *Type:* *f64

The maximum number of seconds in the future when a signature could have been created.

Defaults to `60`. This field is `Computed`: if removed from config, Vault retains the previously set value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#login_max_seconds_not_after CfAuthBackendConfig#login_max_seconds_not_after}

---

##### `LoginMaxSecondsNotBefore`<sup>Optional</sup> <a name="LoginMaxSecondsNotBefore" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.loginMaxSecondsNotBefore"></a>

```go
LoginMaxSecondsNotBefore *f64
```

- *Type:* *f64

The maximum number of seconds in the past when a signature could have been created.

Defaults to `300`. This field is `Computed`: if removed from config, Vault retains the previously set value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#login_max_seconds_not_before CfAuthBackendConfig#login_max_seconds_not_before}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.cfAuthBackendConfig.CfAuthBackendConfigConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#namespace CfAuthBackendConfig#namespace}

---



