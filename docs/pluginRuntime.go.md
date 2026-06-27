# `pluginRuntime` Submodule <a name="`pluginRuntime` Submodule" id="@cdktn/provider-vault.pluginRuntime"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PluginRuntime <a name="PluginRuntime" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/plugin_runtime vault_plugin_runtime}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/pluginruntime"

pluginruntime.NewPluginRuntime(scope Construct, id *string, config PluginRuntimeConfig) PluginRuntime
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig">PluginRuntimeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig">PluginRuntimeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetCgroupParent">ResetCgroupParent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetCpuNanos">ResetCpuNanos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetMemoryBytes">ResetMemoryBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetOciRuntime">ResetOciRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetRootless">ResetRootless</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCgroupParent` <a name="ResetCgroupParent" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetCgroupParent"></a>

```go
func ResetCgroupParent()
```

##### `ResetCpuNanos` <a name="ResetCpuNanos" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetCpuNanos"></a>

```go
func ResetCpuNanos()
```

##### `ResetMemoryBytes` <a name="ResetMemoryBytes" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetMemoryBytes"></a>

```go
func ResetMemoryBytes()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetOciRuntime` <a name="ResetOciRuntime" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetOciRuntime"></a>

```go
func ResetOciRuntime()
```

##### `ResetRootless` <a name="ResetRootless" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetRootless"></a>

```go
func ResetRootless()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PluginRuntime resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/pluginruntime"

pluginruntime.PluginRuntime_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/pluginruntime"

pluginruntime.PluginRuntime_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/pluginruntime"

pluginruntime.PluginRuntime_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/pluginruntime"

pluginruntime.PluginRuntime_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a PluginRuntime resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PluginRuntime to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PluginRuntime that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/plugin_runtime#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the PluginRuntime to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.cgroupParentInput">CgroupParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.cpuNanosInput">CpuNanosInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.memoryBytesInput">MemoryBytesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.ociRuntimeInput">OciRuntimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.rootlessInput">RootlessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.cgroupParent">CgroupParent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.cpuNanos">CpuNanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.memoryBytes">MemoryBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.ociRuntime">OciRuntime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.rootless">Rootless</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `CgroupParentInput`<sup>Optional</sup> <a name="CgroupParentInput" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.cgroupParentInput"></a>

```go
func CgroupParentInput() *string
```

- *Type:* *string

---

##### `CpuNanosInput`<sup>Optional</sup> <a name="CpuNanosInput" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.cpuNanosInput"></a>

```go
func CpuNanosInput() *f64
```

- *Type:* *f64

---

##### `MemoryBytesInput`<sup>Optional</sup> <a name="MemoryBytesInput" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.memoryBytesInput"></a>

```go
func MemoryBytesInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `OciRuntimeInput`<sup>Optional</sup> <a name="OciRuntimeInput" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.ociRuntimeInput"></a>

```go
func OciRuntimeInput() *string
```

- *Type:* *string

---

##### `RootlessInput`<sup>Optional</sup> <a name="RootlessInput" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.rootlessInput"></a>

```go
func RootlessInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `CgroupParent`<sup>Required</sup> <a name="CgroupParent" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.cgroupParent"></a>

```go
func CgroupParent() *string
```

- *Type:* *string

---

##### `CpuNanos`<sup>Required</sup> <a name="CpuNanos" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.cpuNanos"></a>

```go
func CpuNanos() *f64
```

- *Type:* *f64

---

##### `MemoryBytes`<sup>Required</sup> <a name="MemoryBytes" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.memoryBytes"></a>

```go
func MemoryBytes() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `OciRuntime`<sup>Required</sup> <a name="OciRuntime" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.ociRuntime"></a>

```go
func OciRuntime() *string
```

- *Type:* *string

---

##### `Rootless`<sup>Required</sup> <a name="Rootless" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.rootless"></a>

```go
func Rootless() interface{}
```

- *Type:* interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PluginRuntimeConfig <a name="PluginRuntimeConfig" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/pluginruntime"

&pluginruntime.PluginRuntimeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Type: *string,
	CgroupParent: *string,
	CpuNanos: *f64,
	MemoryBytes: *f64,
	Namespace: *string,
	OciRuntime: *string,
	Rootless: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.name">Name</a></code> | <code>*string</code> | The name of the plugin runtime. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.type">Type</a></code> | <code>*string</code> | Specifies the plugin runtime type. Currently only `container` is supported. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.cgroupParent">CgroupParent</a></code> | <code>*string</code> | Specifies the parent cgroup to set for each container. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.cpuNanos">CpuNanos</a></code> | <code>*f64</code> | Specifies CPU limit to set per container in billionths of a CPU. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.memoryBytes">MemoryBytes</a></code> | <code>*f64</code> | Specifies memory limit to set per container in bytes. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.ociRuntime">OciRuntime</a></code> | <code>*string</code> | Specifies OCI-compliant container runtime to use. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.rootless">Rootless</a></code> | <code>interface{}</code> | Whether the container runtime is running as a non-privileged user. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the plugin runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/plugin_runtime#name PluginRuntime#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Specifies the plugin runtime type. Currently only `container` is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/plugin_runtime#type PluginRuntime#type}

---

##### `CgroupParent`<sup>Optional</sup> <a name="CgroupParent" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.cgroupParent"></a>

```go
CgroupParent *string
```

- *Type:* *string

Specifies the parent cgroup to set for each container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/plugin_runtime#cgroup_parent PluginRuntime#cgroup_parent}

---

##### `CpuNanos`<sup>Optional</sup> <a name="CpuNanos" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.cpuNanos"></a>

```go
CpuNanos *f64
```

- *Type:* *f64

Specifies CPU limit to set per container in billionths of a CPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/plugin_runtime#cpu_nanos PluginRuntime#cpu_nanos}

---

##### `MemoryBytes`<sup>Optional</sup> <a name="MemoryBytes" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.memoryBytes"></a>

```go
MemoryBytes *f64
```

- *Type:* *f64

Specifies memory limit to set per container in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/plugin_runtime#memory_bytes PluginRuntime#memory_bytes}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/plugin_runtime#namespace PluginRuntime#namespace}

---

##### `OciRuntime`<sup>Optional</sup> <a name="OciRuntime" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.ociRuntime"></a>

```go
OciRuntime *string
```

- *Type:* *string

Specifies OCI-compliant container runtime to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/plugin_runtime#oci_runtime PluginRuntime#oci_runtime}

---

##### `Rootless`<sup>Optional</sup> <a name="Rootless" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.rootless"></a>

```go
Rootless interface{}
```

- *Type:* interface{}

Whether the container runtime is running as a non-privileged user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/plugin_runtime#rootless PluginRuntime#rootless}

---



