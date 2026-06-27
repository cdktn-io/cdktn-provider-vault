# `configUiDefaultAuth` Submodule <a name="`configUiDefaultAuth` Submodule" id="@cdktn/provider-vault.configUiDefaultAuth"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigUiDefaultAuth <a name="ConfigUiDefaultAuth" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_ui_default_auth vault_config_ui_default_auth}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/configuidefaultauth"

configuidefaultauth.NewConfigUiDefaultAuth(scope Construct, id *string, config ConfigUiDefaultAuthConfig) ConfigUiDefaultAuth
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig">ConfigUiDefaultAuthConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig">ConfigUiDefaultAuthConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetBackupAuthTypes">ResetBackupAuthTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetDisableInheritance">ResetDisableInheritance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetNamespacePath">ResetNamespacePath</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBackupAuthTypes` <a name="ResetBackupAuthTypes" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetBackupAuthTypes"></a>

```go
func ResetBackupAuthTypes()
```

##### `ResetDisableInheritance` <a name="ResetDisableInheritance" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetDisableInheritance"></a>

```go
func ResetDisableInheritance()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetNamespacePath` <a name="ResetNamespacePath" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetNamespacePath"></a>

```go
func ResetNamespacePath()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConfigUiDefaultAuth resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/configuidefaultauth"

configuidefaultauth.ConfigUiDefaultAuth_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/configuidefaultauth"

configuidefaultauth.ConfigUiDefaultAuth_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/configuidefaultauth"

configuidefaultauth.ConfigUiDefaultAuth_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/configuidefaultauth"

configuidefaultauth.ConfigUiDefaultAuth_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ConfigUiDefaultAuth resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ConfigUiDefaultAuth to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ConfigUiDefaultAuth that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_ui_default_auth#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ConfigUiDefaultAuth to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.backupAuthTypesInput">BackupAuthTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.defaultAuthTypeInput">DefaultAuthTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.disableInheritanceInput">DisableInheritanceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.namespacePathInput">NamespacePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.backupAuthTypes">BackupAuthTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.defaultAuthType">DefaultAuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.disableInheritance">DisableInheritance</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.namespacePath">NamespacePath</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `BackupAuthTypesInput`<sup>Optional</sup> <a name="BackupAuthTypesInput" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.backupAuthTypesInput"></a>

```go
func BackupAuthTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultAuthTypeInput`<sup>Optional</sup> <a name="DefaultAuthTypeInput" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.defaultAuthTypeInput"></a>

```go
func DefaultAuthTypeInput() *string
```

- *Type:* *string

---

##### `DisableInheritanceInput`<sup>Optional</sup> <a name="DisableInheritanceInput" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.disableInheritanceInput"></a>

```go
func DisableInheritanceInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `NamespacePathInput`<sup>Optional</sup> <a name="NamespacePathInput" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.namespacePathInput"></a>

```go
func NamespacePathInput() *string
```

- *Type:* *string

---

##### `BackupAuthTypes`<sup>Required</sup> <a name="BackupAuthTypes" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.backupAuthTypes"></a>

```go
func BackupAuthTypes() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultAuthType`<sup>Required</sup> <a name="DefaultAuthType" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.defaultAuthType"></a>

```go
func DefaultAuthType() *string
```

- *Type:* *string

---

##### `DisableInheritance`<sup>Required</sup> <a name="DisableInheritance" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.disableInheritance"></a>

```go
func DisableInheritance() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `NamespacePath`<sup>Required</sup> <a name="NamespacePath" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.namespacePath"></a>

```go
func NamespacePath() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigUiDefaultAuthConfig <a name="ConfigUiDefaultAuthConfig" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/configuidefaultauth"

&configuidefaultauth.ConfigUiDefaultAuthConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DefaultAuthType: *string,
	Name: *string,
	BackupAuthTypes: *[]*string,
	DisableInheritance: interface{},
	Namespace: *string,
	NamespacePath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.defaultAuthType">DefaultAuthType</a></code> | <code>*string</code> | The default authentication method. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.name">Name</a></code> | <code>*string</code> | Unique identifier for the configuration. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.backupAuthTypes">BackupAuthTypes</a></code> | <code>*[]*string</code> | List of backup authentication methods. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.disableInheritance">DisableInheritance</a></code> | <code>interface{}</code> | If true, child namespaces will not inherit default_auth_type and backup_auth_types from this configuration. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.namespacePath">NamespacePath</a></code> | <code>*string</code> | Target namespace for the configuration. Empty string or omitted applies to root namespace. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefaultAuthType`<sup>Required</sup> <a name="DefaultAuthType" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.defaultAuthType"></a>

```go
DefaultAuthType *string
```

- *Type:* *string

The default authentication method.

Uses `OneOf` validator to ensure only valid auth methods are accepted: github, jwt, ldap, oidc, okta, radius, saml, token, userpass.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_ui_default_auth#default_auth_type ConfigUiDefaultAuth#default_auth_type}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Unique identifier for the configuration.

Can contain letters, numbers, underscores, and dashes. Uses `RequiresReplace()` plan modifier - changing this forces resource recreation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_ui_default_auth#name ConfigUiDefaultAuth#name}

---

##### `BackupAuthTypes`<sup>Optional</sup> <a name="BackupAuthTypes" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.backupAuthTypes"></a>

```go
BackupAuthTypes *[]*string
```

- *Type:* *[]*string

List of backup authentication methods.

Uses `ListAttribute` with `ElementType: StringType` to preserve order of backup methods. Each must be a valid auth type. Vault presents these in the "Sign in with other methods" tab. **Note:** Removing this field from configuration will clear it in Vault by sending an empty array.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_ui_default_auth#backup_auth_types ConfigUiDefaultAuth#backup_auth_types}

---

##### `DisableInheritance`<sup>Optional</sup> <a name="DisableInheritance" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.disableInheritance"></a>

```go
DisableInheritance interface{}
```

- *Type:* interface{}

If true, child namespaces will not inherit default_auth_type and backup_auth_types from this configuration.

**Note:** Removing this field from configuration will reset it to `false` in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_ui_default_auth#disable_inheritance ConfigUiDefaultAuth#disable_inheritance}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_ui_default_auth#namespace ConfigUiDefaultAuth#namespace}

---

##### `NamespacePath`<sup>Optional</sup> <a name="NamespacePath" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.namespacePath"></a>

```go
NamespacePath *string
```

- *Type:* *string

Target namespace for the configuration. Empty string or omitted applies to root namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_ui_default_auth#namespace_path ConfigUiDefaultAuth#namespace_path}

---



