# `configGroupPolicyApplication` Submodule <a name="`configGroupPolicyApplication` Submodule" id="@cdktn/provider-vault.configGroupPolicyApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigGroupPolicyApplication <a name="ConfigGroupPolicyApplication" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_group_policy_application vault_config_group_policy_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/configgrouppolicyapplication"

configgrouppolicyapplication.NewConfigGroupPolicyApplication(scope Construct, id *string, config ConfigGroupPolicyApplicationConfig) ConfigGroupPolicyApplication
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig">ConfigGroupPolicyApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig">ConfigGroupPolicyApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.resetNamespace"></a>

```go
func ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConfigGroupPolicyApplication resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/configgrouppolicyapplication"

configgrouppolicyapplication.ConfigGroupPolicyApplication_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/configgrouppolicyapplication"

configgrouppolicyapplication.ConfigGroupPolicyApplication_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/configgrouppolicyapplication"

configgrouppolicyapplication.ConfigGroupPolicyApplication_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/configgrouppolicyapplication"

configgrouppolicyapplication.ConfigGroupPolicyApplication_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ConfigGroupPolicyApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ConfigGroupPolicyApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ConfigGroupPolicyApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_group_policy_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ConfigGroupPolicyApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.groupPolicyApplicationModeInput">GroupPolicyApplicationModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.groupPolicyApplicationMode">GroupPolicyApplicationMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `GroupPolicyApplicationModeInput`<sup>Optional</sup> <a name="GroupPolicyApplicationModeInput" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.groupPolicyApplicationModeInput"></a>

```go
func GroupPolicyApplicationModeInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `GroupPolicyApplicationMode`<sup>Required</sup> <a name="GroupPolicyApplicationMode" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.groupPolicyApplicationMode"></a>

```go
func GroupPolicyApplicationMode() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigGroupPolicyApplicationConfig <a name="ConfigGroupPolicyApplicationConfig" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/configgrouppolicyapplication"

&configgrouppolicyapplication.ConfigGroupPolicyApplicationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	GroupPolicyApplicationMode: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.groupPolicyApplicationMode">GroupPolicyApplicationMode</a></code> | <code>*string</code> | Mode for group policy application. |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GroupPolicyApplicationMode`<sup>Required</sup> <a name="GroupPolicyApplicationMode" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.groupPolicyApplicationMode"></a>

```go
GroupPolicyApplicationMode *string
```

- *Type:* *string

Mode for group policy application.

Must be either "within_namespace_hierarchy" or "any". "within_namespace_hierarchy" means policies only apply when the token authorizing a request was created in the same namespace as the group, or a descendant namespace. "any" means group policies apply to all members of a group, regardless of what namespace the request token came from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_group_policy_application#group_policy_application_mode ConfigGroupPolicyApplication#group_policy_application_mode}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_group_policy_application#namespace ConfigGroupPolicyApplication#namespace}

---



